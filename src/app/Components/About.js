import React from 'react'

const About = () => {
    return (
        <section id='about' className='w-[90%] mx-auto text-black my-9 max-w-[600px]'>
            <h2 className='text-xl text-center font-bold md:text-2xl'>University of Engineering & Management Jaipur</h2>

            <div className='flex flex-col gap-6 max-w-[600px] mx-auto my-5 boxshadow p-7'>
                <h2 className='text-xl text-center  md:text-2xl font-bold'>About the Educational Group</h2>
                <div className='flex justify-between items-center my-5'>
                    <div>
                        <img src="https://uemgroup.s3.amazonaws.com/uploads/sites/3/2024/05/Picture-1.png" className='w-[90px]' alt="" />
                    </div>
                    <div>
                        <img src="https://uemgroup.s3.amazonaws.com/uploads/sites/3/2024/05/Picture-2.jpg" alt="" className='w-[90px]' />
                    </div>
                    <div>
                        <img src="https://uemgroup.s3.amazonaws.com/uploads/sites/3/2024/05/Picture-3.jpg" alt="" className='w-[90px]' />
                    </div>
                    <div>
                        <img src="https://uemgroup.s3.amazonaws.com/uploads/sites/3/2024/05/Picture-4.png" alt="" className='w-[90px]' />
                    </div>

                </div>
                <div className='flex  justify-between items-center'>
                    <div>
                        <img src="https://uemgroup.s3.amazonaws.com/uploads/sites/3/2016/03/Picture-2.1.png" alt="" className='w-[90px]' />
                    </div>
                    <div>
                        <img src="https://uemgroup.s3.amazonaws.com/uploads/sites/3/2016/03/Picture-2.2.jpg" alt="" className='w-[90px]' />
                    </div>
                    <div>
                        <img src="https://uemgroup.s3.amazonaws.com/uploads/sites/3/2016/03/Picture-2.3.png" alt="" className='w-[90px]' />
                    </div>
                    <div>
                        <img src="https://uemgroup.s3.amazonaws.com/uploads/sites/3/2016/03/Picture-2.4.jpg" alt="" className='w-[90px]' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-6 max-w-[600px] mx-auto my-5 boxshadow p-7'>
                <h2 className='text-xl text-center  md:text-2xl font-bold'>Why UEM Jaipur?</h2>
                <ul className='list p-5'>
                    <li className=''>UEM Jaipur provides for CBCS syllabus, which allows a student to choose his own career and prepare accordingly. He/she can choose those papers early and learn those more on which he/she intends to pursue his/her career.</li>
                    <li className='my-2'>Placement of UEM Jaipur continues till the last student is placed. Even if placement needs to continue for one student, placement in UEM Jaipur is made to continue. Till now, all students of all batches have always passed with job offers. There is no example of a student passing out without a job offer.</li>
                </ul>
            </div>

        </section>
    )
}

export default About
