import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/UserContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);
