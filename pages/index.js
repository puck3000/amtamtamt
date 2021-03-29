import Head from 'next/head'
import { useEffect, useState } from 'react'
import HomeGrid from '../components/HomeGrid'

export default function Home() {
  return (
    <div className='md:h-screen md:flex md:flex-col md:justify-center md:items-center'>
      <Head>
        <title>AmtAmtAmt</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <header>header</header> */}
      <main className='w-screen min-h-screen'>
        <HomeGrid />
        <div className='hidden doNotPurge'></div>
      </main>
      {/* <footer>footer</footer> */}
    </div>
  )
}
