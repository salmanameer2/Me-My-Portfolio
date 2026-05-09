import React, { useState } from 'react'
import { FaBars} from 'react-icons/fa'
import {FaXmark} from 'react-icons/fa6'



const Navbar = () => {

  const [showMenu,setShowMenu] = useState(false);

  return (
    <nav className='fixed w-full py-4 px-8 z-50 bg-dark-200 backdrop-blur-sm  shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        {/*LOGO*/}
        <div>
          <a href="#" className='text-3xl font-bold text-white'>
            Salman 
            <span className='text-2xl text-purple'> Ameer</span>
          </a>
        </div>
        {/*NAV LINKS */}
        <div className='hidden md:flex space-x-10'>
          <a href="#home" className='relative text-white transition duration-300 hover:text-purple group '>
            <span>Home</span>
          </a>

          <a href="#about" className='relative text-white transition duration-300 hover:text-purple group '>
            <span>About</span>
          </a>

          <a href="#skills" className='relative text-white transition duration-300 hover:text-purple group '>
            <span>Skills</span>
          </a>

          <a href="#projects" className='relative text-white transition duration-300 hover:text-purple group '>
            <span>Projects</span>
          </a>

          

          <a href="#contact" className='relative text-white transition duration-300 hover:text-purple group '>
            <span>Contact</span>
          </a>
        </div>
        <div className='md:hidden'>
          {
            showMenu ?
            <FaXmark  onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>:
            <FaBars onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>
          }
        </div>
      </div>

          {/*Mobile Menu */}

         {
          showMenu && (
           <div className='md:hidden flex flex-col p-4 mt-4 items-center space-y-5 justify-center h-screen bg-dark-100 rounded-3xl'>
               <a onClick={()=>setShowMenu(!showMenu)} href="#home" className='relative text-white transition duration-300 hover:text-purple group '>
            <span>Home</span>
          </a>

          <a onClick={()=>setShowMenu(!showMenu)} href="#about" className='relative text-white transition duration-300 hover:text-purple group '>
            <span>About</span>
          </a>

          <a onClick={()=>setShowMenu(!showMenu)} href="#skills" className='relative text-white transition duration-300 hover:text-purple group '>
            <span>Skills</span>
          </a>

          <a onClick={()=>setShowMenu(!showMenu)} href="#projects" className='relative text-white transition duration-300 hover:text-purple group '>
            <span>Projects</span>
          </a>

        

          <a onClick={()=>setShowMenu(!showMenu)} href="#contact" className='relative text-white transition duration-300 hover:text-purple group '>
            <span>Contact</span>
          </a>
           </div>
          )
         }

    </nav>
  )
}

export default Navbar
