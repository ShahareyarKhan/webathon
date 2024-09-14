"use client";
import React, { useState } from 'react'
import Contact from './Contact';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Contact />
            <div className='p-3 px-8 flex  md:p-5  bg-[#ffffff] gap-10 boxshadow'>
                <div className='flex items-center'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/UEM_Logo.jpg" alt="" className='w-[100px]' />
                </div>
                <div className='w-full flex lg:flex-col items-center gap-4 justify-between lg:justify-center '>
                    <div className=' text-black flex items-center justify-center md:text-2xl lg:text-3xl font-bold'>
                        University of Engineering and Management, Jaipur
                    </div>
                    <div className='hidden lg:flex gap-4 items-center'>
        <div className='text-[#d1601a] bg-white p-1 rounded-full'><FaInstagram className='text-xl'/></div>
        <div className='text-[#d1601a] bg-white p-1 rounded-full'><FaFacebook className='text-xl'/></div>
        <div className='text-[#d1601a] bg-white p-1 rounded-full'><FaTwitter className='text-xl'/></div>
        <div className='text-[#d1601a] bg-white p-1 rounded-full'><FaLinkedin className='text-xl'/></div>
      </div>



                    {!open ? <FaBars className='text-black lg:hidden text-2xl' onClick={() => setOpen(!open)} /> : <IoClose className='text-black text-2xl' onClick={() => setOpen(!open)} />}
                </div>




            </div>
            <div className='hidden lg:flex   text-black   text-sm  p-3 px-9  overflow-auto items-center justify-center'>
                <div className=' px-4'><a href="#home">Home
                </a> </div>
                <div className=' px-4'>About</div>
                <div className=' px-4'>Why UEM?</div>
                <div className=' px-4'>Approvals</div>
                <div className=' px-4'>Foreign Tie-ups</div>
                <div className=' px-4'>Admissions</div>
                <div className=' px-4'>Contact Us</div>
                <div className=' px-4'>Recruitments</div>
                <div className=' px-4'>Departments</div>
                <div className=' px-4'>Academic</div>
                <div className=' px-4'>Placement</div>
                <div className=' px-4'>Campus Life</div>
                {/* <div className=' px-4'>News</div> */}
                <div className=' px-4'><a href="#news">News
                </a> </div>
                <div className=' px-4'>Gallery</div>
                <div className=' px-4'>Notices</div>
                <div className=' px-4'>Reasearch</div>

            </div>
            <div className={`${open === true ? "flex" : "hidden"} lg:hidden text-black  flex-col absolute bg-white p-5 px-9 text-sm min-h-screen gap-5 w-1/2 max-w-[200px]`}>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Home</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>About</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Why UEM?</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Approvals</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Foreign Tie-ups</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Admissions</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Contact Us</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Recruitments</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Departments</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Academic</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Placement</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Campus Life</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>
                    <a href="#news">
News
                    </a>
                    </div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Gallery</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Notices</div>
                <div className='hover:font-semibold text-gray-600 cursor-pointer hover:text-black  '>Reasearch</div>
            </div>
        </>

    )
}

export default Navbar;
