import Image from 'next/image'
import Quader from './Quader'

const amtImages = [
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_2.jpg',
    alt: 'AMT',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_1.jpg',
    alt: 'AMT',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_3.jpg',
    alt: 'AMT',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_4.jpg',
    alt: 'AMT',
  },
]

const afeImages = [
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_6.jpg',
    alt: 'AFE',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_5.jpg',
    alt: 'AFE',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_7.jpg',
    alt: 'AFE',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_8.jpg',
    alt: 'AFE',
  },
]

const afzImages = [
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_10.jpg',
    alt: 'AFZ',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_11.jpg',
    alt: 'AFZ',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_9.jpg',
    alt: 'AFZ',
  },
  {
    src: '/sm_stuff/AMT-Facebook_Visuals_12.jpg',
    alt: 'AFZ',
  },
]

export default function HomeGrid() {
  return (
    <ul className='md:grid md:grid-cols-2 md:w-full'>
      <li className='mb-1 md:mb-0 border-black border md:border-t-2 md:border-r-1 md:border-b-1 md:border-l-2'>
        <Quader images={amtImages} link='/amt' />
      </li>
      <li className='mb-1 md:mb-0 border-black border md:border-t-2 md:border-r-2 md:border-b-1 md:border-l-1'>
        <Quader images={afeImages} link='/afe' />
      </li>
      <li className='mb-1 md:mb-0 border-black border md:border-t-1 md:border-r-1 md:border-b-2 md:border-l-2'>
        <Quader images={afzImages} link='/afz' />
      </li>
      <li className='mb-1 md:mb-0 border-black border md:border-t-1 md:border-r-2 md:border-b-2 md:border-l-1'>
        <article className='w-full h-full flex justify-center items-center'>
          <h2>Scratchpad</h2>
        </article>
      </li>
    </ul>
  )
}
