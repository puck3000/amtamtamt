import Head from 'next/head'
import { useEffect, useState } from 'react'
import HomeGrid from '../components/HomeGrid'

export default function Home() {
  return (
    <div className='md:h-screen md:flex md:flex-col md:justify-center md:items-center'>
      <Head>
        <title>AMT | AFZ | AFE</title>
        <link rel='icon' href='/favicon.ico' />
        {/* Twitter */}
        <meta
          name='twitter:card'
          content='AMTAMTAMT | Amt für Zukunft | Amt für Ermöglichung'
          key='twcard'
        />

        {/* Open Graph */}
        <meta property='og:url' content='https://amtamtamt.ch' key='ogurl' />
        <meta
          property='og:image'
          content='/assets/sm_stuff/AMT-Facebook_Visuals_1.jpg'
          key='ogimage'
        />
        <meta
          property='og:site_name'
          content='AMTAMTAMT | Amt für Zukunft | Amt für Ermöglichung'
          key='ogsitename'
        />
        <meta
          property='og:title'
          content='AMTAMTAMT | Amt für Zukunft | Amt für Ermöglichung'
          key='ogtitle'
        />
        <meta
          property='og:description'
          content='AMTAMTAMT | Amt für Zukunft | Amt für Ermöglichung'
          key='ogdesc'
        />
      </Head>

      {/* <header>header</header> */}
      <main className='w-screen min-h-screen'>
        <HomeGrid />
      </main>
      <a
        className='z-20 text-xs absolute transform origin-bottom-right -rotate-90 -top-2 right-0 px-2 uppercase bg-white'
        href='https://hellastudio.ch'
        target='_blank'
        rel='noopener'
      >
        Hella Studio
      </a>
      {/* <footer>footer</footer> */}
    </div>
  )
}
