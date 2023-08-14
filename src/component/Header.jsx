
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="p-5 bg-blue-50" >
            <div className="max-w-[1240px] mx-auto mt-[30px] flex  justify-between items-center  ">
                <h2 className="text-3xl font-semibold tracking-wide">CareerHub</h2>
                <nav className='hidden md:flex'>
                    <ul className="space-x-4 text-[18px] text-gray-700 hidden md:flex ">
                        <NavLink to="/"
                            // title="Home"
                            className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
                        >Home</NavLink>
                        <NavLink to="/statistics"
                            className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
                        >Statistics</NavLink>
                        <NavLink to="/apply"
                            className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
                        >Applied Jobs</NavLink>
                        <NavLink to='/blog'
                            className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
                        >Blog</NavLink>
                    </ul>
                </nav>

                {/* mobile navber section start  */}
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(true)}>
                        <Bars3BottomRightIcon  className="w-6 h-6 text-gray-800" />
                    </button>
                    {
                        menuOpen && (
                           
                            <div className="absolute top-0 left-0 w-full z-10">
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* // dwop down menu close button  */}
                                    <div>
                                        <button onClick={() => setMenuOpen(false)}>
                                            <XMarkIcon className="h-6 w-6 text-gray-800" />
                                        </button>
                                    </div>
                                    {/* mobile nav item section  */}
                                    <nav>
                                        <ul className="space-y-5">
                                            <li>
                                                <NavLink to="/"
                                                    // title="Home"
                                                    className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
                                                >Home</NavLink>
                                            </li>

                                            <li>
                                                <NavLink to="/statistics"
                                                    className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
                                                >Statistics</NavLink>
                                            </li>

                                            <li>
                                                <NavLink to="/apply"
                                                    className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
                                                >Applied Jobs</NavLink>
                                            </li>

                                            <li>
                                                <NavLink to='/blog'
                                                    className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
                                                >Blog</NavLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;