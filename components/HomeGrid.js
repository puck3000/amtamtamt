import Image from 'next/image'
import Quader from './Quader'

const amtImages = [
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_2.jpg',
    alt: 'Amt Visual',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_1.jpg',
    alt: 'Amt Visual',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_3.jpg',
    alt: 'Amt Visual',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_4.jpg',
    alt: 'Amt Visual',
  },
]

const afzImages = [
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_6.jpg',
    alt: 'Amt Visual',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_5.jpg',
    alt: 'Amt Visual',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_7.jpg',
    alt: 'Amt Visual',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_8.jpg',
    alt: 'Amt Visual',
  },
]

const afeImages = [
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_10.jpg',
    alt: 'Amt Visual',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_11.jpg',
    alt: 'Amt Visual',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_9.jpg',
    alt: 'Amt Visual',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_12.jpg',
    alt: 'Amt Visual',
  },
]

export default function HomeGrid() {
  return (
    <ul className='w-5/6 md:w-5/6 grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 '>
      <li className='aspect-w-16 aspect-h-9 sm:mb-1 md:mb-0 border-black border md:border-t-2 md:border-r-1 md:border-b-1 md:border-l-2'>
        <Quader images={amtImages} />
      </li>
      <li className='aspect-w-16 aspect-h-9 sm:mb-1 md:mb-0 border-black border md:border-t-2 md:border-r-2 md:border-b-1 md:border-l-1'>
        <Quader images={afeImages} />
      </li>
      <li className='aspect-w-16 aspect-h-9 sm:mb-1 md:mb-0 border-black border md:border-t-1 md:border-r-1 md:border-b-2 md:border-l-2'>
        <Quader images={afzImages} />
      </li>
      <li className='aspect-w-16 aspect-h-9 sm:mb-1 md:mb-0 border-black border md:border-t-1 md:border-r-2 md:border-b-2 md:border-l-1'>
        <article className='w-full h-full flex justify-center items-center'>
          <h2>Scratchpad</h2>
        </article>
      </li>
    </ul>
  )
}
