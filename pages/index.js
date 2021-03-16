import Head from 'next/head'
import HomeGrid from '../components/HomeGrid'

export default function Home() {
  return (
    <div className='md:h-screen md:flex md:flex-col md:justify-center md:items-center'>
      <Head>
        <title>AmtAmtAmt</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <header>header</header> */}
      <main className='m-1 md:w-5/6'>
        <HomeGrid />
      </main>
      {/* <footer>footer</footer> */}
    </div>
  )
}
