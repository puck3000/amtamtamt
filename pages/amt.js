import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Amt() {
  return (
    <div className='md:h-screen md:flex md:flex-col md:justify-center md:items-center'>
      <Head>
        <title>AmtAmtAmt</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <header>header</header> */}
      <main className='w-full h-full flex justify-center items-center'>
        <motion.div className='m-6' layoutId='/amt'>
          <div className='block text-9xl' style={{ fontFamily: 'NeueBit' }}>
            ✨
          </div>
          <h1
            className='text-2xl md-text-3xl text-bold uppercase'
            style={{ fontFamily: 'MaisonNeue' }}
          >
            AmtAmtAmt
          </h1>
          <article className='max-w-1xl md:w-2/3 md:max-w-4xl lg:w-1/2'>
            <h2
              className='text-xl leading-4 mb-4'
              style={{ fontFamily: 'NeueBit' }}
            >
              Iniziiert neue Ämter für die Herausforderungen von heute und
              morgen.
            </h2>
            <p className='mb-6 text-xl leading-4 md:leading-none'>
              Die neuen Ämter hinterfragen das Gegenwärtige, forschen an
              zukünftigen Möglichkeiten, entwickeln Projekte, verbinden Menschen
              und ermöglichen Neues. Die neuen Ämter verpflichten sich einer
              bestimmten Sache, übernehmen Verantwortung, bieten Unterstützung.
              Die neuen Ämter stellen sich neuen Herausforderungen und werfen
              Bürokratie, altherrgebrachte Strukturen und nostalgischen Ballast
              ab, um mit dem Wandel der Zeit Schritt zu halten.
            </p>
          </article>
          <Link href='/'>
            <button className='cursor-pointer border-4 uppercase border-black px-2 py-1'>
              <h2 className='leading-none pt-1'>zurück zur Übersicht</h2>
            </button>
          </Link>
        </motion.div>
      </main>
      {/* <footer>footer</footer> */}
    </div>
  )
}
