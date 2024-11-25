import React from 'react'
import MYImage from './../../assets/IMG_0336.jpg'


export default function Hero() {
  return (
    <section id="intro" className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      
      <div>
        <img
        src={MYImage}
        alt="Profile Picture"
        className="rounded-full object-cover w-36 h-36 fit mb-4"
      /></div>
      <h1 className="text-4xl font-bold text-gray-300 mb-4">KENEIL SAMMS</h1>
      <h2 className="text-2xl text-gray-400 mb-6">Junior Full Stack Developer</h2>
      <p className="max-w-2xl text-gray-400">
        Passionate about creating elegant solutions to complex problems. With a strong foundation in both front-end and back-end technologies, I strive to build seamless, user-centric applications.
      </p>
    </section>
  )
}