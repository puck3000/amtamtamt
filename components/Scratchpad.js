import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Scratchpad() {
  const [boardDimensions, setBoardDimensions] = useState(300)
  const [isPlaying, setIsPlaying] = useState(false)
  const [counter, setCounter] = useState(0)
  const [benjamins, setBenjamins] = useState([
    { id: 1, falling: false },
    { id: 2, falling: false },
    { id: 3, falling: false },
    { id: 4, falling: false },
    { id: 5, falling: false },
    { id: 6, falling: false },
    { id: 7, falling: false },
    { id: 8, falling: false },
    { id: 9, falling: false },
    { id: 10, falling: false },
  ])
  const [fallingBenjamin, setFallingBenjamin] = useState(11)

  const constraintsRef = useRef(null)

  function randomTime() {
    return Math.floor(Math.random() * 1000 + 1000)
  }

  const fallingBenjamins = () => {
    const randomBenjamin = Math.floor(Math.random() * 9 + 1)
    setFallingBenjamin(randomBenjamin)
    setCounter((counter) => counter + 1)
    // execute indefinately with random interval
    setTimeout(fallingBenjamins, randomTime())
  }

  const playGame = () => {
    setIsPlaying(true)
    fallingBenjamins()
  }

  useEffect(() => {
    let timedBoardDimensions = setTimeout(() => {
      setBoardDimensions(constraintsRef.current.getBoundingClientRect())
    }, 500)
    return () => {
      clearTimeout(timedBoardDimensions)
    }
  }, [constraintsRef])

  return (
    <article
      ref={constraintsRef}
      className='w-full h-full flex justify-center items-center'
    >
      {isPlaying ? (
        <div className='relative w-full h-full flex justify-center items-center overflow-hidden'>
          {/* CashCounter */}
          <p className={`absolute text-2xl md:text-4xl left-8 bottom-4 `}>
            $: 0
          </p>
          {/* Display Text */}
          <div className='text-2xl md:text-4xl absolute text-red-900 top-4 z-10'>
            {counter > 10 ? (
              <a
                href='https://www.amt-fuer-ermoeglichung.ch/support'
                target='_blank'
                rel='noopener'
                className='cursor-pointer'
              >
                <span className='animation-wiggle'>&rarr;</span> Kultur
                ermöglichen
              </a>
            ) : counter > 7 ? (
              <p>Kulturförderung leider oft auch nicht.</p>
            ) : counter > 5 ? (
              <p>funktioniert nicht?</p>
            ) : (
              ''
            )}
          </div>
          {/* Falling Benjamins */}
          <ul className='absolute inset-0 grid grid-cols-10'>
            {benjamins.map((dollar, i) => (
              <li
                key={i}
                className={`mx-auto text-3xl lg:text-4xl 2xl:text-5xl transition-transform ease-in transform -mt-6 duration-1000 ${
                  fallingBenjamin == dollar.id
                    ? 'translate-y-full'
                    : 'opacity-0'
                } `}
              >
                $
              </li>
            ))}
          </ul>
          {/* Money Cup */}
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 2 }}
            className='cursor-pointer z-10 text-3xl md:text-4xl xl:text-5xl 2xl:text-8xl '
          >
            ☕
          </motion.div>
        </div>
      ) : (
        <button className='text-4xl' onClick={() => playGame()}>
          Play
        </button>
      )}
    </article>
  )
}
