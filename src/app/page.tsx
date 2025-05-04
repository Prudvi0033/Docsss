'use client'
import React from 'react'
import Navbar from './components/Navbar'
import AnimatedRadial from './components/AnimatedGradient'

const page = () => {
  return (
    <>
      <AnimatedRadial />
      <main className="relative z-10 h-screen">
        <Navbar/>
      </main>
      <div>
        features
      </div>
    </>
  )
}

export default page