import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function Scratchpad() {
  const constraintsRef = useRef(null)
  return (
    <article
      ref={constraintsRef}
      className='w-full h-full flex justify-center items-center'
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0}
        whileHover={{ scale: 1.7 }}
        whileTap={{ scale: 2.5 }}
        onDrag={(event, info) => console.log(info.point.x, info.point.y)}
        className='cursor-pointer'
      >
        <span className='text-4xl'>&#10752;</span>
      </motion.div>
    </article>
  )
}
