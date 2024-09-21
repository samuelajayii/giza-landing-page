import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    return (
        <div className='p-6 flex flex-col gap-4 bg-white rounded-md lg:w-[35%]'>
            <FontAwesomeIcon icon={faQuoteLeft} className='text-[#EC7D22] self-start' />
            <p className='text-[#808080] text-base'>{props.text}</p>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <img className='rounded-full h-10 w-10' src={props.pfp} alt='' />
                    <p className='text-[#1a1a1a] font-semibold'>{props.name}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <FontAwesomeIcon icon={faStar} className='text-[#ec7d22]' />
                    <p className='text-[#1A1A1A] font-semibold'>{props.star}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;