import React from 'react'
import ParticlesComponent from './Components/particles'
import Home from './Components/Home'
import News from './Components/News'
import Bulletin from './Components/Bulletin'
import About from './Components/About'

const page = () => {
  return (
    <div>
      <ParticlesComponent />
      <Home />
      <div className='flex'>
        <div className='w-full lg:w-[70%]'>

          <News />
        </div>
        <div className='hidden lg:block'>

          <Bulletin />
        </div>
      </div>

      <About/>
      
      <div>
        <img src="https://www.iao.org/assets/images/email/seal/iao-seal.png" alt="" className='w-[70px] md:w-[90px] fixed  bottom-7 right-7' />
      </div>
    </div>
  )
}

export default page
