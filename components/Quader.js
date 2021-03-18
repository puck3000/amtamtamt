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
      className={`relative w-full h-full overflow-hidden ${
        hovering ? '' : 'hovering'
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {hovering && (
        <motion.div
          className={`hoverCard absolute inset-0 z-10 py-2 px-4`}
          style={{
            backgroundColor: data.color,
          }}
        >
          <div className='flex justify-between'>
            <h2 className='title inline'>{data.title}</h2>
            {data.link && (
              <a
                href={data.link}
                target='_blank'
                rel='noopener'
                className='inline text-7xl md:text-9xl'
              >
                &rarr;
              </a>
            )}
          </div>
          {data.amtName && (
            <h3 className='amtName leading-none -mt-2 mb-4 md:-mt-4'>
              {data.amtName}
            </h3>
          )}

          <p className='claim'>{data.claim}</p>
        </motion.div>
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
