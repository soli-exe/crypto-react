import React, { useState, useEffect } from 'react';

// API
import { getCoins } from '../services/api';

// Components
import Loader from './Loader';
import Coin from './Coin';

// Icons 
import searchIcon from '../assets/icons/search-solid.svg';

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [searchValue, setSearchValue] = useState("");


    useEffect(() => {

        const fetchAPI = async () => {
            const data = await getCoins();
            return setCoins(data);

        }
        fetchAPI();
    }, [])

    const searchResult = coins.filter((coin) => {
        return coin.name.toLowerCase().includes(searchValue.toLowerCase())
    });

    const searchInputHanlder = (event) => { return setSearchValue(event.target.value) }

    return (
        <>
            <section className='relative flex items-center'>
                <img className='w-4 absolute left-3' src={searchIcon} alt='search' />
                <input className='py-2 pr-3 pl-9 w-80 rounded-lg outline-none text-sm bg-gray-100 border border-gray-200 focus:shadow-md' type='text' placeholder='Search coins...' value={searchValue} onChange={searchInputHanlder} />
            </section>
            {
                coins.length ?
                    <div className='container py-10 xl:px-24 lg:px-12 md:px-6 sm:px-1'>
                        <section className=' border border-gray-300 bg-gray-100 sm:rounded-xl overflow-hidden'>
                            <header>
                                <ul className='flex items-center w-full border-b border-gray-300 py-2 px-3 bg-red-200 text-center'>
                                    <li className='sm:flex justify-center flex-1 text-sm font-bold hidden'>Logo</li>
                                    <li className='flex justify-center flex-1 text-sm font-bold'>Currency <span className='hidden sm:block ml-1'>name</span></li>
                                    <li className='sm:flex justify-center flex-1 text-sm font-bold hidden'>Symbol</li>
                                    <li className='flex justify-center flex-1 text-sm font-bold'><span className='hidden sm:block mr-1'>Current</span> price</li>
                                    <li className='flex flex-col items-center flex-1 text-sm font-bold'>Marketcap changes<p className='text-xs font-light'>per/24h</p> </li>
                                    <li className='sm:flex justify-center flex-1 text-sm font-bold hidden'>Marketcap</li>
                                    <li className='flex justify-center flex-1 text-sm font-bold sm:hidden'>Details</li>
                                </ul>
                            </header>
                            {searchResult.length ?
                                searchResult.map(coin => <Coin key={coin.id} coins={coin} />) :
                                <span className='font-bold text-center text-lg text-red-600 block py-4'>
                                    No coins found!
                                </span>
                            }
                        </section>
                    </div> :
                    <div className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <div>
                            <Loader />
                        </div>
                        <span className='text-lg font-bold leading-10'>
                            Loading...
                        </span>
                    </div>
            }

        </>
    );
};

export default Landing;