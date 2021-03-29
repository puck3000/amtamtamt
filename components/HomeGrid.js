import { useEffect, useState } from 'react'
import Quader from './Quader'
import Scratchpad from './Scratchpad'

const amt_data = {
  title: 'AMT',
  linkInternal: true,
  claim: 'Iniziiert neue Ämter für die Herausforderungen von heute und morgen.',
  link: '/amt',
  images: [
    {
      src: '/sm_stuff/AFE_Header_ORG.gif',
      alt: 'AFE',
    },
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
      src: '/img/MarkerDitter_HellaStudio_+.png',
      alt: 'AFE',
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
  amtName: 'Amt für Ermöglichung',
  claim: 'Entwickelt Neues, macht möglich und setzt um.',
  link: 'https://www.amt-fuer-ermoeglichung.ch/',
  images: [
    {
      src: '/sm_stuff/AFE_Header_SUPPORT_Color.gif',
      alt: 'AFE',
    },
    {
      src: '/img/AFE_ernst_jandl_Gun_Ditter.jpg',
      alt: 'AFZ',
    },
    {
      src: '/sm_stuff/AFE_Header_MISSION.gif',
      alt: 'AFE',
    },
  ],
  color: ' #fbf900',
}

const afz_data = {
  title: 'AFZ',
  amtName: 'Amt für Zukunft',
  claim: 'Erforscht das Potential der Zukunft.',
  link: 'https://www.amt-fuer-zukunft.ch',
  images: [
    {
      src: '/img/AFZ_Hoody_Front.png',
      alt: 'AFZ',
    },
    {
      src: '/img/AFZ_hyperspaceJump_ditter.png',
      alt: 'AFZ',
    },
    {
      src: '/img/AFZ_PlanetDitter_HellaStudio.png',
      alt: 'AFZ',
    },
  ],
  color: '#00a5eb',
}

function shuffleArray() {
  let arr = [1, 2, 3, 4]
  arr.sort(() => Math.random() - 0.5)
  console.log(arr)
  return arr
}

export default function HomeGrid() {
  const [arr, setArr] = useState([])
  useEffect(() => {
    const newArr = shuffleArray()
    setArr(() => newArr)
    return () => {}
  }, [])

  return (
    <ul
      id='homeGrid'
      className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 min-h-screen'
    >
      <li className={`order-${arr[0]}`}>
        <Quader data={amt_data} />
      </li>
      <li className={`order-${arr[1]}`}>
        <Quader data={afe_data} />
      </li>
      <li className={`order-${arr[2]}`}>
        <Quader data={afz_data} />
      </li>
      <li className={`order-${arr[3]}`}>
        <Scratchpad color='#feed2e' />
      </li>
    </ul>
  )
}
