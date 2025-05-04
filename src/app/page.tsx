'use client'
import React from 'react'
import Navbar from './components/Navbar'
import AnimatedRadial from './components/AnimatedGradient'
import Herosection from './components/Herosection'

const page = () => {
  return (
    <>
      <AnimatedRadial />
      <main className="relative z-10 h-screen">
        <Navbar/>
        <Herosection/>
      </main>
    </>
  )
}

export default page