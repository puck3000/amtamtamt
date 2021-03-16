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
      <main className='m-1 md:w-5/6 md:aspect-w-16 md:aspect-h-9'>
        <motion.div layoutId='/amt'>
          <h1>AMT AMT AMT</h1>
          <h2>
            Iniziiert neue Ämter für die Herausforderungen von heute und morgen.
          </h2>
          <p>
            Die neuen Ämter hinterfragen das Gegenwärtige, forschen an
            zukünftigen Möglichkeiten, entwickeln Projekte, verbinden Menschen
            und ermöglichen Neues. Die neuen Ämter verpflichten sich einer
            bestimmten Sache, übernehmen Verantwortung, bieten Unterstützung.
            Die neuen Ämter stellen sich neuen Herausforderungen und werfen
            Bürokratie, altherrgebrachte Strukturen und nostalgischen Ballast
            ab, um mit dem Wandel der Zeit Schritt zu halten.
          </p>
          <Link href='/'>
            <h2>zum AmtAmtAmt</h2>
          </Link>
          <Link href='/'>
            <h2 className='cursor-pointer'>zurück zur Übersicht</h2>
          </Link>
        </motion.div>
      </main>
      {/* <footer>footer</footer> */}
    </div>
  )
}
