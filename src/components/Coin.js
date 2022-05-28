import React, { useState } from 'react';

// Components
import CoinDetail from './CoinDetail';

// Icons
import infoIcon from '../assets/icons/circle-info-solid.svg';


const Coin = ({ coins }) => {

    const {
        name,
        symbol,
        image,
        current_price,
        market_cap,
        market_cap_change_percentage_24h,
    } = coins;

    const [isShown, setIsShown] = useState(false);

    const showDetails = () => {
        return setIsShown(!isShown);
    }

    return (
        <ul className='flex items-center w-full border-b border-gray-300 py-3 sm:text-center px-3'>
            <li className='sm:flex justify-center flex-1 text-sm lg:text-md hidden'><img className='w-10' src={image} alt={symbol} /></li>
            <li className='flex sm:justify-center items-center flex-1 text-sm lg:text-md'><img className='w-4 sm:hidden mr-1' src={image} alt={symbol} />{name}</li>
            <li className='sm:flex justify-center flex-1 sm:text-sm text-xs lg:text-md hidden'>{symbol.toUpperCase()}</li>
            <li className='flex justify-center flex-1 text-sm lg:text-md'>${current_price.toLocaleString()}</li>
            <li className='flex justify-center flex-1 text-sm lg:text-md font-bold'><span className={market_cap_change_percentage_24h > 1 ? 'text-green-700' : 'text-red-800'}>%{market_cap_change_percentage_24h.toFixed(2)}</span></li>
            <li className='sm:flex justify-center flex-1 sm:text-sm text-xs lg:text-md hidden'>${market_cap.toLocaleString()}</li>
            <li className='relative flex justify-center flex-1 text-sm font-bold sm:hidden'>
                <button onClick={showDetails}>
                    <img className='w-5' src={infoIcon} alt='info' />
                </button>
                {isShown && <CoinDetail name={name} image={image} symbol={symbol} marketCap={market_cap} closeHandler={showDetails} />}
            </li>
        </ul>
    );
};

export default Coin;