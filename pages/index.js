import Head from 'next/head'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-blue-400 flex flex-col'>
      <Head>
        <title>AmtAmtAmt</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>header</header>
      <main className='flex-1 w-full h-full bg-blue-200'></main>
      <footer>footer</footer>
    </div>
  )
}
