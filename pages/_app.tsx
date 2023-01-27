import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Media from '../components/media'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>8Vape</title>
        <link rel="icon" href="/ecig.webp" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Media/>
      <Footer />
    </>
  )
}

export default MyApp

