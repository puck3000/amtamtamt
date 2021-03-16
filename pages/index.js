import Head from 'next/head'
import HomeGrid from '../components/HomeGrid'

export default function Home() {
  return (
    <div className='w-screen h-screen md:flex md:flex-col'>
      <Head>
        <title>AmtAmtAmt</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>header</header>
      <main className='w-full md:flex-1  flex flex-col items-center justify-center'>
        <HomeGrid />
      </main>
      <footer>footer</footer>
    </div>
  )
}
