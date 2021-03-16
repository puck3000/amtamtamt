import Image from 'next/image'
import { useEffect, useState } from 'react'
export default function Quader({ images }) {
  const [activeImg, setactiveImg] = useState(0)
  const [isSwitching, setisSwitching] = useState(true)

  function randomTime() {
    return Math.floor(Math.random() * 1500 + 300)
  }

  function switchImg() {
    setactiveImg((activeImg + 1) % images.length)
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
    <article className='w-full h-full flex justify-center items-center'>
      <Image
        src={images[activeImg].src}
        alt={images[activeImg].alt}
        width={1600}
        height={900}
      />
    </article>
  )
}
