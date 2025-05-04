'use client'

import { motion } from 'framer-motion'

const AnimatedRadialCircle = () => {
  return (
    <div className="fixed inset-0 bg-white/30 z-[-1] flex items-center justify-center">
      <motion.div
        className="w-[1000px] h-[1000px] rounded-full"
        style={{
          background: 'radial-gradient(circle, black 0%, transparent 70%)',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export default AnimatedRadialCircle
