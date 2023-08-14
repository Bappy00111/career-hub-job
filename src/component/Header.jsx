import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-[30px] p-5" >
           <div className="flex justify-between items-center">
           <h2 className="text-3xl font-semibold">CareerHub</h2>
            <ul className="space-x-4 text-[18px] text-gray-700 ">
                <NavLink to="/"
                className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
                >Home</NavLink>
                <NavLink  to="/statistics"
                className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
                >Statistics</NavLink>
                <NavLink  to="/apply"
                className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
                >Applied Jobs</NavLink>
                <NavLink  to='/blog'
                className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
                >Blog</NavLink>
            </ul>
            <button className="btn  bg-[#9873FF] hover:bg-[#7E90FE] text-white">Star Applying</button>
           </div>
        </div>
    );
};

export default Header;