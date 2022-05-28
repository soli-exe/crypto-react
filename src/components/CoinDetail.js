import React from 'react';

// Icons 
import timesIcon from '../assets/icons/times-circle-solid.svg';

const CoinDetail = (props) => {

    const { name,
        image,
        symbol,
        marketCap,
        closeHandler } = props;

    return (
        <div className='absolute -left-full -top-1/2 bg-white border border-gray-400 p-2 rounded-md z-10'>
            <ul className='flex flex-col gap-y-2'>
                <li className='flex justify-between'>
                    <img className='w-5' src={image} alt={name} />
                    <button onClick={closeHandler}><img className='w-5' src={timesIcon} alt='times' /></button>
                </li>
                <li className='text-sm font-normal text-black'><span className='font-bold'>Name:</span> {name}</li>
                <li className='text-sm font-normal text-black'><span className='font-bold'>Symbol:</span> {symbol.toUpperCase()}</li>
                <li className='text-sm font-normal text-black'><span className='font-bold'>Marketcap:</span> {marketCap.toLocaleString()}</li>
            </ul>
        </div>
    );
};

export default CoinDetail;