import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Scratchpad() {
  const [boardDimensions, setBoardDimensions] = useState(300)
  const [benjamins, setBenjamins] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)

  const constraintsRef = useRef(null)

  const calculateFallingValues = () => {
    return Math.floor(boardDimensions.height / 2 + 50)
  }

  const getRandomX = () => {
    const randomX =
      Math.ceil(Math.random() * boardDimensions.width) *
      (Math.round(Math.random()) ? 1 : -1)
    return randomX
  }

  const fallingBenjamins = () => {
    return (
      <motion.span
        initial={{
          y: calculateFallingValues() * -1,
          x: getRandomX(),
        }}
        animate={{ y: calculateFallingValues() }}
        transition={{
          duration: 1.5,
        }}
      >
        $
      </motion.span>
    )
  }

  const playGame = () => {
    setIsPlaying(true)
    for (let i = 0; i < 10; i++) {
      setBenjamins((benjamins) => [...benjamins, fallingBenjamins()])
    }
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
          <p className={`absolute text-4xl left-8 top-4 `}>$: 0</p>
          <ul class='absolute inset-0 grid grid-cols-10'>
            {benjamins.map((dollar, i) => (
              <li className={`mx-auto  transition  duration-1000 `}>$</li>
            ))}
          </ul>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0}
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 2.5 }}
            // onDrag={(event, info) => console.log(info.point.x, info.point.y)}
            className='cursor-pointer z-10'
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

          {/* {benjaminId > 7 ? (
            benjaminId > 9 ? (
              benjaminId > 12 ? (
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  class='absolute bottom-2 text-3xl text-red-900'
                >
                  Kultur Ermöglichen <span>&rarr;</span>
                </a>
              ) : (
                <p class='absolute bottom-2 text-3xl text-red-900'>
                  Kulturschaffende oft auch.
                </p>
              )
            ) : (
              <p class='absolute bottom-2 text-3xl text-red-900'>frustriert?</p>
            )
          ) : (
            <></>
          )} */}
        </div>
      ) : (
        <button onClick={() => playGame()}>Play</button>
      )}
      {/* <style jsx>{`
        @media screen and (max-width: 768px) {
          article {
            height: 50vh;
          }
        }
      `}</style> */}
    </article>
  )
}
