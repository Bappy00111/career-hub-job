import React from 'react';
import img from '../../src/assets/All Images/P3OLGJ1 copy 1.png'

const Home = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-[40px]  md:grid grid-cols-2 items-center p-5">
            <div className="col-span-1 ">
                <h1 className="text-4xl md:text-7xl font-semibold ">One Step <br /> Closer To Your <br /><span className="text-[#7E90FE]"> Dream Job</span></h1>
                <p className="mt-[24px] text-gray-700 ">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className="btn  bg-[#9873FF] hover:bg-[#7E90FE] text-white mt-[32px]">Get Started</button>
            </div>
            <div className="col-span-1 ">
                <img src={img} alt="" />

            </div>
        </div>
    );
};

export default Home;