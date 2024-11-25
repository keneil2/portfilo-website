import React from 'react'
import githubImage from "./../../assets/github-logo.png"
const Navbar = () => {
  return (
    <nav className=' bg-slate-800 fixed top-0 left-0 right-0 flex p-2 rounded-sm justify-between text-gray-300 items-center'>
       <p  className=''><span className='font-bold'>Keneil</span>Samms</p>
       <div className='flex w-80 justify-between'>
        <span>Home</span>
      <span> <a href="#projects">Projects</a></span>
       </div>
    <div className='w-9 bg-white rounded-full'>
      <a href="https://github.com/keneil2" target='_blank'>  <img src={githubImage} alt="" /></a>
        </div>   
    </nav>
  )
}

export default Navbar