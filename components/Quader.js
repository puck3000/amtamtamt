import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Quader({ images, link, color }) {
  const [activeImg, setActiveImg] = useState(0)
  const [isSwitching, setIsSwitching] = useState(true)

  function randomTime() {
    return Math.floor(Math.random() * 1500 + 500)
  }

  function switchImg() {
    setActiveImg((activeImg + 1) % images.length)
  }

  function randomImgSwitcher() {
    while (isSwitching) {
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
        isSwitching ? '' : 'hovering'
      }`}
      onMouseEnter={() => setIsSwitching(false)}
      onMouseLeave={() => setIsSwitching(true)}
    >
      {!isSwitching && (
        <Link href={link}>
          <motion.div
            layoutId={link}
            className={`absolute inset-0 flex flex-col justify-center items-center text-6xl z-10 cursor-pointer bg-${color} bg-opacity-80`}
            style={{
              backdropFilter: 'blur(5px)',
            }}
          >
            <h2 className='text-8xl '>{images[activeImg].alt}</h2>
          </motion.div>
        </Link>
      )}

      <div
        className={`absolute inset-0 transition ${
          isSwitching ? '' : 'transform scale-125'
        }`}
      >
        <Image
          src={images[activeImg].src}
          alt={images[activeImg].alt}
          layout='fill'
          objectFit='cover'
        />
      </div>
    </article>
  )
}
