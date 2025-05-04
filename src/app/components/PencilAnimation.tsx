import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const PencilAnimation = () => {
  return (
    <div className='relative'>
      <motion.div
        initial = {{rotate : 0}}
        animate = {{rotate : 360}}
        transition={{duration : 5, repeat : Infinity, ease : "linear"}}
      >
        <Image src="/write.svg" height={0} width={0} alt='Circle' className='w-30 h-30' />
      </motion.div>
    </div>
  )
}

export default PencilAnimation