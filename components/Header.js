import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//import { AiOutlineSearch } from 'react-icons/ai'
//import { CgProfile } from 'react-icons/cg'
import mick from '../public/razer.png'

//backdrop-blur-sm bg-gradient-to-r from-green-200/90 via-white/90 to-rose-200/90

const style = {
    wrapper: 'justify-between sticky top-0 z-50 bg-[#04111d] w-screen px-[1.2rem] py-2 flex shadow-xl backdrop-blur-sm bg-opacity-40 bg-gradient-to-r from-green-200/90 via-white/90 to-rose-200/90',
    logoContainer: 'flex items-center cursor-pointer',
    logoText: 'ml-[0.8rem] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-400 to-green-400 font-bold text-4xl',
    headerItems: 'flex items-center justify-end',
    headerBut: 'text-lg text-black px-2 font-semibold hover:text-cyan-400 border border-transparent bg hover:bg-transparent transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    hidden: 'text-transparent px-4 font-bold',
}


const Header = () => {
    return <div className={style.wrapper}>
        <Link href="/">
            <div className={style.logoContainer}>
                    <Image src={mick} height={70} width={70} alt='' />
                    <div className={style.logoText}>8Vape</div>
            </div>
        </Link>
            <div className={style.headerItems}>
                <Link href="../characters">
                    <div className={style.headerBut}> Dashboard </div>
                </Link>
                <Link href="https://cryptable.netlify.app/">
                    <div className={style.headerBut}> Vapes </div>
                </Link>
                <Link href="https://elkgrums.netlify.app/">
                    <div className={style.headerBut}> Juice </div>
                </Link>
                <Link href="https://elkgrums.netlify.app/">
                    <div className={style.headerBut}> Cigarrettes </div>
                </Link>
                <Link href="../../dev">
                    <div className={style.hidden}> . </div>
                </Link>
            </div>
    </div>
}

export default Header