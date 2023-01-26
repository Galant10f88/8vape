//import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/slider'

//min-h-screen

const style = {
  wrapper: 'relative flex h-[500vh]',
  container: '',
  contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
  cele: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-fuchsia-500 font-bold text-6xl'
}

const Home = () => {
  return (
    <div className={style.wrapper}>
    <div className="relative flex h-[120vh] flex-col items-center justify-center py-2">
      <div className={style.container}>
      <div className={style.contentWrapper}>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className={style.cele} href="https://www.eightcig.com/">
            8Vape
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          We are here to serve all your vaping needs!
        </p>
        <Slider/>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://disney15.netlify.app/"
            className="mt-6 w-96 rounded-xl border-2 border-green-500 p-6 text-left hover:text-cyan-400 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Web Design &rarr;</h3>
            <p className="mt-4 text-xl">
              If you need attractive, modern and responsive websites click here.
            </p>
          </a>

          <a
            href="https://cryptable.netlify.app/"
            className="mt-6 w-96 rounded-xl border-2 border-cyan-400 p-6 text-left hover:text-cyan-400 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Blockchain &rarr;</h3>
            <p className="mt-4 text-xl">
              Interested in Web3 and building the future? We can help with that too.
            </p>
          </a>

          <a
            href="https://elkgrums.netlify.app/"
            className="mt-6 w-96 rounded-xl border-2 border-fuchsia-500 p-6 text-left hover:text-cyan-400 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">SEO | Marketing &rarr;</h3>
            <p className="mt-4 text-xl">
              Click here if you want to be on the top of Google.
            </p>
          </a>

          <a
            href="https://disney15.netlify.app/"
            className="mt-6 w-96 rounded-xl border-2 border-red-500 p-6 text-left hover:text-cyan-400 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Maintenance &rarr;</h3>
            <p className="mt-4 text-xl">
              This is the place to go if your site needs updating.
            </p>
          </a>
        </div>
      </main>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Home
