"use client";
import React, { useEffect, useState } from 'react'
const images=["https://media.uem.edu.in/uploads/sites/3/2022/05/1920x1080-ph.d.jpg","https://media.uem.edu.in/uploads/sites/3/2022/06/PHOTO-2022-06-14-22-46-09.jpg","https://media.uem.edu.in/uploads/sites/3/2016/03/MicrosoftTeams-image-1.jpg","https://media.uem.edu.in/uploads/sites/3/2020/06/BPT.jpg"]
const Home = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setIndex((index + 1) % images.length);
        }, 3000);
    },[index]);
  return (
    <div className=''>
      <div>
        <img src={images[index]} alt="" className='w-full h-[400px] object-fill'/>
      </div>

      <div className=' flex flex-col lg:flex-row lg:justify-center text-black items-center my-8 gap-5'>
        <div className='p-3 bg-yellow-500 btn cursor-pointer'>Apply for IEMCET 2024</div>
        <div className='p-3 bg-blue-500 btn cursor-pointer'>Admission</div>
        <div className='p-3 bg-green-500 btn cursor-pointer'>Apply for IEMJEE 2024</div>
      </div>
    </div>
  )
}

export default Home
