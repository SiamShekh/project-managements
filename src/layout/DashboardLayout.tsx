import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { MdDashboard } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import icon from "../assets/icons/icons.png";
const DashboardLayout = () => {
    const [toggled, setToggled] = React.useState(false);
    const [broken, setBroken] = React.useState(window.matchMedia('(max-width: 800px)').matches);
    const location = useLocation().pathname;
    
    return (
        <div className="lg:flex justify-between min-h-screen relative bg-white">
            <div className="bg-[#fff] w-1/5 overflow-hidden border-r-black border-r-2">
                <Sidebar className="h-full" onBackdropClick={() => setToggled(false)} backgroundColor="#fff" customBreakPoint="800px" toggled={toggled} onBreakPoint={setBroken}>
                    <div className="flex pt-10 mb-10  items-center gap-3 w-full mx-auto justify-center">
                        <div className="size-10 flex justify-center items-center text-white rounded-xl bg-gradient-to-br from-blue-400 to-blue-800 font-Teko text-3xl">P</div>
                        <p className="text-black font-Teko text-2xl">Projest ms</p>
                    </div>
                    <Menu>
                        <MenuItem component={<Link to={'/user/dashboard'} />} className={`text-black opacity-70 hover:opacity-100 hover:text-black  ${location === '/user/dashboard' && 'bg-gray-600 text-white'} `} icon={<MdDashboard />}>
                            Dashboard
                        </MenuItem>
                        <MenuItem component={<Link to={'/user/add-project'} />
                        } className={`text-black opacity-70 hover:opacity-100 ${location === '/user/add-project' && 'bg-gray-600 text-white'}`} icon={<BsPlus />}>Add new project
                        </MenuItem>
                    </Menu>
                </Sidebar>
            </div>

            <div className={`navbar fixed top-0 left-[50%] -translate-x-[50%] mx-auto text-black backdrop-blur-xl border-b h-fit bg-black bg-opacity-20 w-fit rounded-xl my-3 z-50 ${broken ? 'block' : 'hidden'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setToggled(true)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                    </div>
                    <a className="btn btn-ghost text-xl hidden lg:block">Project ms</a>
                    <img src={icon} alt="icons" className="size-8" />
                </div>
            </div>

            <div className="px-5 lg:pt-0 pt-[20vh] text-black w-4/5 mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;