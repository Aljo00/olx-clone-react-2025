import React, { useState } from "react";
import { signIn, signUp, google } from "../services/AuthService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";

const Login = ({ setIsLoginOpen }) => {
  const [signState, setSignState] = useState("Log In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (signState === "Sign Up" && !name)) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      if (signState === "Log In") {
        await signIn({ email, password });
      } else {
        await signUp({ name, email, password });
      }
      setName("");
      setEmail("");
      setPassword("");
      setIsLoginOpen(false);
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  const signUpWithGoogle = async () => {
    await google();
    navigate("/");
  };

  return (
    <div className="flex fixed inset-0 justify-center items-center z-20 bg-black/80">
      <div className="w-96 h-[450px] bg-white p-4 rounded-md shadow-md">
        <div className="flex justify-end">
          <button onClick={() => setIsLoginOpen(false)}>
            <MdClose className="text-3xl hover:text-red-600 cursor-pointer" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-2xl font-semibold">{signState}</h1>

            {signState === "Sign Up" && (
              <input
                className="w-full p-2 outline-none border-2 border-black/50 focus:border-blue-900 rounded-md"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            )}

            <input
              className="w-full p-2 outline-none border-2 border-black/50 focus:border-blue-900 rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className="w-full p-2 outline-none border-2 border-black/50 focus:border-blue-900 rounded-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button className="w-full bg-blue-900 p-2 rounded-md">
              {signState}
            </button>

            {signState === "Log In" ? (
              <p>
                Don't have an account?{" "}
                <button type="button" onClick={() => setSignState("Sign Up")}>
                  Sign Up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button type="button" onClick={() => setSignState("Log In")}>
                  Log In
                </button>
              </p>
            )}
          </div>
        </form>

        <div className="flex flex-col items-center gap-2">
          <p>or</p>
          <button
            onClick={signUpWithGoogle}
            className="flex items-center gap-4 justify-center w-full border-2 border-black p-2 rounded-md hover:border-green-700 hover:text-green-700"
          >
            <FaGoogle className="text-2xl " /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
