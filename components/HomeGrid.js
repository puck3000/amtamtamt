export default function HomeGrid() {
  return (
    <ul className='w-5/6 md:w-5/6 grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 '>
      <li className='aspect-w-16 aspect-h-9 sm:mb-1 md:mb-0 border-black border md:border-t-2 md:border-r-1 md:border-b-1 md:border-l-2'>
        <article className='w-full h-full flex justify-center items-center'>
          <h2>AMT</h2>
        </article>
      </li>
      <li className='aspect-w-16 aspect-h-9 sm:mb-1 md:mb-0 border-black border md:border-t-2 md:border-r-2 md:border-b-1 md:border-l-1'>
        <article className='w-full h-full flex justify-center items-center'>
          <h2>AFE</h2>
        </article>
      </li>
      <li className='aspect-w-16 aspect-h-9 sm:mb-1 md:mb-0 border-black border md:border-t-1 md:border-r-1 md:border-b-2 md:border-l-2'>
        <article className='w-full h-full flex justify-center items-center'>
          <h2>AFZ</h2>
        </article>
      </li>
      <li className='aspect-w-16 aspect-h-9 sm:mb-1 md:mb-0 border-black border md:border-t-1 md:border-r-2 md:border-b-2 md:border-l-1'>
        <article className='w-full h-full flex justify-center items-center'>
          <h2>Scratchpad</h2>
        </article>
      </li>
    </ul>
  )
}
