import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Quader({ data }) {
  const [activeImg, setActiveImg] = useState(0)
  const [hovering, setIsHovering] = useState(false)

  function randomTime() {
    return Math.floor(Math.random() * 1500 + 500)
  }

  function switchImg() {
    setActiveImg((activeImg + 1) % data.images.length)
  }

  function randomImgSwitcher() {
    while (!hovering) {
      setTimeout(() => {
        switchImg()
      }, randomTime())
      return () => {
        clearTimeout()
      }
    }
  }

  useEffect(() => {
    randomImgSwitcher()
  })

  return (
    <article
      className={`relative aspect-w-16 aspect-h-9 overflow-hidden ${
        hovering ? '' : 'hovering'
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {hovering && (
        <AnimatePresence>
          <motion.div
            className={`absolute inset-0 z-10`}
            style={{
              backdropFilter: 'blur(5px)',
              backgroundColor: data.color,
            }}
          >
            <h2 className='ml-2 text-8xl '>{data.title}</h2>
            <h3 className='claim'>
              <span>&rarr;</span> {data.claim}
            </h3>
          </motion.div>
        </AnimatePresence>
      )}

      <div
        className={`absolute inset-0 transition ${
          hovering ? 'transform scale-125' : ''
        }`}
      >
        <Image
          src={data.images[activeImg].src}
          alt={data.images[activeImg].alt}
          layout='fill'
          objectFit='cover'
        />
      </div>
    </article>
  )
}
