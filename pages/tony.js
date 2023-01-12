import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'

const style = {
    wrapper: 'relative h-[3100vh]',
    contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
    copyContainer: 'w-1/2',
    title: 'relative text-black text-[40px] font-semibold',
    list: 'text-black text-2xl mt-[0.8rem] mb-[1.2rem]',
    grid: 'flex grid grid-cols-2 gap-32 w-full',
    card: 'h-9/10 overflow-hidden',
    lowCard: 'flex h-1/4 flex-col justify-between p-4',
    carWrap: 'relative flex h-[300px] w-[200px] cursor-pointer flex-col rounded-lg bg-slate-600 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-yellow-500',
    button: 'relative text-lg bg bg-slate-400 p-2 border border-white rounded-full hover:bg-yellow-500 cursor-pointer',
    searchBar: 'flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-white rounded-[0.8rem] border-2 border-blue-500 hover:border-black',
    searchIcon: 'text-[#8a939b] mx-3 font-bold text-lg',

}

//<div style={{ display: "flex", flexDirection: "row", maxWidth: "100%", gap: 30, flexWrap: "wrap" }}>
//<div className="card" style={{ width: "18rem"}} key={`character-${character.name}-${index}`}>
//<div className="card-body">

const Cards = () => {
    const [characters, setCharacters] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = async () => {
        const characterResponse = await fetch("https://api.disneyapi.dev/characters");
        const jsonObj = await characterResponse.json();
        console.log(jsonObj);
        setCharacters(jsonObj.data);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <div className={style.title}>
                        Disney Characters
                    </div>
                    <div className={style.searchBar}>
            <div className={style.searchIcon}>
                <AiOutlineSearch/>
            </div>
            <input className={style.searchInput} 
            placeholder="Search Characters!"
            />
        </div>
                    <button className={style.button}> Sort button </button>
                    <div className={style.grid}>
                        {characters.map((character, index) => {
                            return (
                                <div className={style.carWrap}>
                                <div className={style.card} key={`character-${character.name}-${index}`}>
                                    <img src={character.imageUrl} className="card-img-top" style={{ width: "100%", height: 200, objectFit: "contain" }} />
                                    <div className={style.lowCard}>
                                        <h5 className="card-title">{character.name}</h5>
                                        <p className="card-text">Char ID - {character._id}</p>
                                    </div>
                                </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards