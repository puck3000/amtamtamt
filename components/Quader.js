import Image from 'next/image'
import { useEffect, useState } from 'react'
export default function Quader({ images }) {
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
        <div
          className='absolute inset-0 flex flex-col justify-center items-center text-6xl text-red-800 z-10'
          style={{ backdropFilter: 'blur(5px)' }}
        >
          <h2 className='text-8xl'>{images[activeImg].alt}</h2>
        </div>
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
