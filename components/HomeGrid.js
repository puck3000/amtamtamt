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
  amtName: 'Amt für Entwicklung',
  claim: 'Entwickelt Neues, macht möglich und setzt um.',
  link: 'https://www.amt-fuer-ermoeglichung.ch/',
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
  amtName: 'Amt für Zukunft',
  claim: 'Erforscht das Potential der Zukunft.',
  link: 'https://www.amt-fuer-zukunft.ch',
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
    <ul id='homeGrid' className='grid grid-cols-1 md:grid-cols-2 min-h-screen'>
      <li className='min-h-1/4 md:min-h-1/2'>
        <Quader data={amt_data} />
      </li>
      <li className='min-h-1/4 md:min-h-1/2'>
        <Quader data={afe_data} />
      </li>
      <li className='min-h-1/4 md:min-h-1/2'>
        <Quader data={afz_data} />
      </li>
      <li className='min-h-1/2 md:min-h-1/2'>
        <Scratchpad />
      </li>
    </ul>
  )
}
