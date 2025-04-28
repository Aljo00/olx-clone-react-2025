import React, { useState } from "react";
import RoundNavButton from "../Buttons/RoundNavButton";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import UserMenuButton from "../Buttons/UserMenuButton";
import { LuNewspaper } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GrInstallOption } from "react-icons/gr";
import { LuCreditCard } from "react-icons/lu";
import { MdOutlineBusiness } from "react-icons/md";
import { useUser } from "../../context/UserContext";
import Login from "../Login";
import { logOut } from "../../services/AuthService";
import { toast } from "react-toastify";

const UserInfoNav = () => {
    const { user } = useUser()
    const name = user ? user.displayName : "Guest";

    const [menu, setMenu] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    const handleUserMenu = () => {
        setMenu(!menu);
    };

    const handleSignOut = async () => {
        await logOut()
    }

    return (
        <div className="relative">
            {user ? (
                <div className="flex gap-4 relative">
                    <RoundNavButton icon={FiMessageCircle} />
                    <RoundNavButton icon={FaRegBell} />
                    <div
                        onClick={handleUserMenu}
                        className="flex gap-4 items-center cursor-pointer"
                    >
                        <div className="bg-purple-950 rounded-full flex justify-center text-white text-xl font-semibold items-center w-9 h-9">
                            {name.charAt(0)}
                        </div>
                        <IoIosArrowDown className="text-2xl cursor-pointer" />
                    </div>

                    {menu ? (
                        <div className="absolute top-11 w-72 right-0 rounded-md shadow-xl bg-white">
                            <div className="p-4">
                                <div className="flex gap-2">
                                    <div className="bg-purple-950 rounded-full flex justify-center text-white text-xl font-semibold items-center w-14 h-14">
                                        {name.charAt(0)}{" "}
                                    </div>
                                    <p className="text-2xl font-semibold">{name}</p>
                                </div>
                                <button className="bg-blue-800 w-full py-2 rounded-sm font-semibold text-white mt-4">
                                    View and edit profile
                                </button>
                                <div className="pt-4">
                                <p className="font-semibold">2 Step left</p>
                                <div className="flex py-2 gap-2 w-full">
                                    <div className="flex-1 bg-yellow-500 py-[2px]"></div>
                                    <div className="flex-1 bg-yellow-500 py-[2px]"></div>
                                    <div className="flex-1 bg-yellow-500 py-[2px]"></div>
                                    <div className="flex-1 bg-yellow-500 py-[2px]"></div>
                                    <div className="flex-1 bg-gray-500 py-[2px]"></div>
                                    <div className="flex-1 bg-gray-500 py-[2px]"></div>
                                </div>
                                <p className="text-sm text-gray-500">We are built on trust. Help one another to get to know each other better.</p>
                            </div>
                            </div>

                            

                            <div className="line bg-gray-500 py-[.5px]"></div>

                            <UserMenuButton icon={LuNewspaper} name={"MY ADS"} />
                            <UserMenuButton
                                icon={MdOutlineBusiness}
                                name={"Buy Business Package"}
                            />

                            <UserMenuButton
                                icon={LuCreditCard}
                                name={"Bought Packages & Billing"}
                            />
                            <div className="line bg-gray-500 py-[.5px]"></div>
                            <UserMenuButton icon={IoIosHelpCircleOutline} name={"Help"} />
                            <UserMenuButton icon={IoMdSettings} name={"Settings"} />
                            <div className="line bg-gray-500 py-[.5px]"></div>
                            <UserMenuButton
                                icon={GrInstallOption}
                                name={"Install OLX Light app"}
                            />
                            <UserMenuButton onClick={handleSignOut} icon={RiLogoutBoxLine} name={"Logout"} />
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <>
                   <button onClick={() => setIsLoginOpen(true)} className="text-black underline font-semibold">Login</button>
                </>
            )}

            {isLoginOpen && <Login setIsLoginOpen={setIsLoginOpen} />}
        </div>
    );
};

export default UserInfoNav;
