import { motion } from 'framer-motion'

const FloatingCard = ({ children, delay = 0, direction = 'up' }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: 0.6, 
        delay: delay,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

export default FloatingCard