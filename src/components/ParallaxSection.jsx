import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxSection = ({ children, bgImage, direction = 'up' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], direction === 'up' ? [100, -100] : [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default ParallaxSection