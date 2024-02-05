import React from 'react'
import { HomeImg } from '../Component/Images'
import HomeFooter from '../Component/Layout/HomeFooter'

const Home = () => {
  return (
    <>
      <div className='Midel-Img'>
        <img src={HomeImg} alt='img' />
      </div>
      <HomeFooter/>
    </>
  )
}

export default Home
