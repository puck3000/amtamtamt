import { motion, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Scratchpad() {
  const [boardDimensions, setBoardDimensions] = useState()
  const [isPlaying, setIsPlaying] = useState(false)
  const [benjamins, setBenjamins] = useState([])
  const [score, setScore] = useState(0)

  const constraintsRef = useRef(null)
  const dollarRef = useRef(null)

  const calculateFallingValues = () => {
    return Math.floor(boardDimensions.height / 2 + 50)
  }

  useEffect(() => {
    let timedBoardDimensions = setTimeout(() => {
      setBoardDimensions(constraintsRef.current.getBoundingClientRect())
    }, 500)
    return () => {
      clearTimeout(timedBoardDimensions)
    }
  })

  return (
    <article
      ref={constraintsRef}
      className='relative w-full h-full flex justify-center items-center overflow-hidden'
    >
      {isPlaying ? (
        <div>
          <p className='absolute left-2 top-1'>$: {score}</p>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0}
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 2.5 }}
            onDrag={(event, info) => console.log(info.point.x, info.point.y)}
            className='cursor-pointer'
          >
            <span
              className='inline-block'
              style={{
                backgroundImage: 'url("/icons/cup.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                height: '3rem',
                width: '2rem',
              }}
            ></span>
          </motion.div>
        </div>
      ) : (
        <button onClick={() => setIsPlaying(true)}>Play</button>
      )}
    </article>
  )
}
