import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
const Contact = () => {
  return (
    <div className='text-black px-4 p-2 flex justify-center gap-8 bg-[#2793ff]'>
      <div className='flex gap-3 items-center'>
      <MdOutlineMailOutline />
      admissions@iem.edu.in
      </div>
      <div className='flex gap-3 items-center'>
        <IoCall/>
        Admission Helpline - 8010700500 / 9887313330
      </div>
    </div>
  )
}

export default Contact
