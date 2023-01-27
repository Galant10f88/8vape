//import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//import Slider from '../components/slider'
import dynamic from "next/dynamic";

//min-h-screen

const style = {
  wrapper: 'relative flex h-[240vh]',
  container: '',
  contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
  cele: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-fuchsia-500 font-bold text-6xl',
  grid: 'flex h-[50vh] grid grid-cols-4 gap-20 w-full',
  carWrap: 'relative flex h-[300px] w-[200px] cursor-pointer flex-col rounded-lg bg-slate-400 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-emerald-400 hover:-translate-y-1 hover:scale-110 duration-300',
  card: 'h-9/10 overflow-hidden',
  lowCard: 'flex h-1/4 flex-col justify-between p-4',
  discount: 'text-gray-200 line-through'
}

const Slider = dynamic(
  () => {
    return import("../components/slider");
  },
  { ssr: false }
);

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
            href="../characters"
            className="mt-6 w-96 rounded-xl border-2 border-green-500 p-6 text-left hover:text-cyan-400 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Dashboard &rarr;</h3>
            <p className="mt-4 text-xl">
              Click here for detailed info on performance.
            </p>
          </a>

          <a
            href="https://www.eightvape.com/collections/vapes"
            className="mt-6 w-96 rounded-xl border-2 border-cyan-400 p-6 text-left hover:text-cyan-400 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Vapes &rarr;</h3>
            <p className="mt-4 text-xl">
              The best deals on vapes and accessories!
            </p>
          </a>

          <a
            href="https://www.eightvape.com/collections/e-liquid"
            className="mt-6 w-96 rounded-xl border-2 border-fuchsia-500 p-6 text-left hover:text-cyan-400 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Juice &rarr;</h3>
            <p className="mt-4 text-xl">
              The place to look for refills and flavors.
            </p>
          </a>

          <a
            href="https://www.eightcig.com/cigarette-solutions/"
            className="mt-6 w-96 rounded-xl border-2 border-red-500 p-6 text-left hover:text-cyan-400 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Cigarrette Solutions &rarr;</h3>
            <p className="mt-4 text-xl">
              If you like to keep it old school we have your back.
            </p>
          </a>
        </div>
        <div>
          <br/>
          <br/>
          <br/>
        </div>
        <div className={style.grid}> 
                                <div className={style.carWrap}>
                                  <div className={style.card}>
                                    <img src='https://cdn.shopify.com/s/files/1/0882/1942/products/twist-e-liquids-juice-mint-0-2x-60ml-120ml-vape-juice-twist-e-liquid-31813416288367_200x.jpg?v=1674162161' className="card-img-top" style={{ width: "100%", height: 200, objectFit: "contain" }} />
                                    <div className={style.lowCard}>
                                        <h5 className="card-title">Mint Vape Juice</h5>
                                        <p className="card-text"><span className={style.discount}>$24.99</span>  $19.95</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.carWrap}>
                                  <div className={style.card}>
                                    <img src='https://cdn.shopify.com/s/files/1/0882/1942/products/monster-vape-labs-juice-the-milk-jax-100ml-vape-juice-31798613540975_200x.jpg?v=1674162892' className="card-img-top" style={{ width: "100%", height: 200, objectFit: "contain" }} />
                                    <div className={style.lowCard}>
                                        <h5 className="card-title">Milk Jax Vape Juice</h5>
                                        <p className="card-text"><span className={style.discount}>$26.99</span>  $12.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.carWrap}>
                                  <div className={style.card}>
                                    <img src='https://cdn.shopify.com/s/files/1/0882/1942/products/u-toob-100-juice-u-toob-100-iced-volcano-burst-2x-60ml-120ml-vape-juice-31795282608239_200x.jpg?v=1674163432' className="card-img-top" style={{ width: "100%", height: 200, objectFit: "contain" }} />
                                    <div className={style.lowCard}>
                                        <h5 className="card-title">Iced Volcano Burst</h5>
                                        <p className="card-text">$17.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.carWrap}>
                                  <div className={style.card}>
                                    <img src='https://cdn.shopify.com/s/files/1/0882/1942/products/u-toob-100-juice-u-toob-100-iced-strawberry-watermelon-2x-60ml-120ml-vape-juice-31795281526895_200x.jpg?v=1674163436' className="card-img-top" style={{ width: "100%", height: 200, objectFit: "contain" }} />
                                    <div className={style.lowCard}>
                                        <h5 className="card-title">Strawberry Watermelon</h5>
                                        <p className="card-text">$17.99</p>
                                    </div>
                                </div>
                            </div>
                    </div>
      </main>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Home
