import React from 'react'
import '../styles/Menu.css'
import { Link } from 'react-router-dom'

const Menu = ({OnchangeMenu}) => {
  const handleMenu = () => {
    console.log("sddeecf")
    // OnchangeMenuc
  }
  return (
    <div id='menu' className='fixed top-0 left-0 h-screen w-screen bg-[#000] duration-500 transition-all z-100 menu'>
        <div className='h-full flex items-center'>
            <div className='flex flex-col gap-2 ms-[20vw] bg-[#000000]'>
                <div className='bg-[#000000] overflow-hidden'>
                <a href='#targetOurServicesSection' onClick={OnchangeMenu}  className='!text-white text-6xl font-MontserratMedium leading-[1.1]'><p className='menuLinks'>Our Services</p></a>
                </div>
                <div className='bg-[#000000] overflow-hidden'>
                <a  href='#targetAboutUsSection' onClick={OnchangeMenu} className='!text-white text-6xl font-MontserratMedium leading-[1.1]'><p className='menuLinks'>About Us</p></a>
                </div>
                <div className='bg-[#000000] overflow-hidden'>
                <a href='#targetOurCultureSection' onClick={OnchangeMenu} className='!text-white text-6xl font-MontserratMedium leading-[1.1]'><p className='menuLinks'>Our Culture</p></a>
                </div>
                <div className='bg-[#000000] overflow-hidden'>
                <Link className='!text-white text-6xl font-MontserratMedium leading-[1.1]'><p className='menuLinks'>Companies</p></Link>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Menu