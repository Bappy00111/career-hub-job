import React from 'react';
import logo from '../assets/Icons/accounts 1.png'
import logo1 from '../assets/Icons/business 1.png'
import logo2 from '../assets/Icons/chip 1.png'
import logo3 from '../assets/Icons/social-media 1.png'

const JobCatagore = () => {
    return (
        <div className="max-w-[1240px] mx-auto  mt-[100px] p-5">
            <div className="text-center">
                <h1 className='text-4xl font-bold  pb-5'>Job Category List</h1>
                <p className='text-gray-400'> Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="mt-10 flex flex-col items-center md:flex-row gap-5 md:justify-between ">
                <div className="w-[311px] h-[243px] md:w-full md:h-full mb-5 p-10 bg-blue-50 rounded  ">
                    <img src={logo} alt="" />
                    <p className="font-semibold mt-[20px]">Account & Finance</p>
                    <p className="text-gray-400 ">300 Jobs Available</p>
                </div>
                <div className="w-[311px] h-[243px] md:w-full md:h-full mb-5  p-10 bg-blue-50 rounded  ">
                    <img src={logo3} alt="" />
                    <p className="font-semibold mt-[20px]">Account & Finance</p>
                    <p className="text-gray-400 ">300 Jobs Available</p>
                </div>
                <div className="w-[311px] h-[243px] md:w-full md:h-full mb-5  p-10 bg-blue-50 rounded ">
                    <img src={logo1} alt="" />
                    <p className="font-semibold mt-[20px]">Account & Finance</p>
                    <p className="text-gray-400 ">300 Jobs Available</p>
                </div>
                <div className="w-[311px] h-[243px] md:w-full md:h-full mb-5  p-10 bg-blue-50 rounded ">
                    <img src={logo2} alt="" />
                    <p className="font-semibold mt-[20px]">Account & Finance</p>
                    <p className="text-gray-400 ">300 Jobs Available</p>
                </div>
               
               
            </div>
        </div>
    );
};

export default JobCatagore;