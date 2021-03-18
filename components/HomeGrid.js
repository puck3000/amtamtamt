import { m } from 'framer-motion'
import Image from 'next/image'
import Quader from './Quader'
import Scratchpad from './Scratchpad'

const amt_data = {
  title: 'AMT',
  claim: 'Iniziiert neue Ämter für die Herausforderungen von heute und morgen.',
  images: [
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
  ],
  color: 'white',
}

const afe_data = {
  title: 'AFE',
  claim: 'Entwickelt Neues, macht möglich und setzt um.',
  images: [
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
  ],
  color: '#feed2e',
}

const afz_data = {
  title: 'AFZ',
  claim: 'Erforscht das Potential der Zukunft.',
  images: [
    {
      src: '/sm_stuff/AMT-Facebook_Visuals_10.jpg',
      alt: 'AFZ',
    },
    {
      src: '/sm_stuff/AMT-Facebook_Visuals_11.jpg',
      alt: 'AFZ',
    },
    {
      src: '/sm_stuff/AMT-Facebook_Visuals_13.jpg',
      alt: 'AFZ',
    },
    {
      src: '/sm_stuff/AMT-Facebook_Visuals_12.jpg',
      alt: 'AFZ',
    },
  ],
  color: '#49b7e8',
}

export default function HomeGrid() {
  return (
    <ul className='md:grid md:grid-cols-2 md:w-full'>
      <li className='mb-1 md:mb-0 border-black border md:border-t-2 md:border-r-1 md:border-b-1 md:border-l-2'>
        <Quader data={amt_data} />
      </li>
      <li className='mb-1 md:mb-0 border-black border md:border-t-2 md:border-r-2 md:border-b-1 md:border-l-1'>
        <Quader data={afe_data} />
      </li>
      <li className='mb-1 md:mb-0 border-black border md:border-t-1 md:border-r-1 md:border-b-2 md:border-l-2'>
        <Quader data={afz_data} />
      </li>
      <li className='mb-1 md:mb-0 border-black border md:border-t-1 md:border-r-2 md:border-b-2 md:border-l-1'>
        <Scratchpad />
      </li>
    </ul>
  )
}
