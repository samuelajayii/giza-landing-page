import React from 'react';
import img from './img/Rectangle 1.svg'

const Main = () => {
    return (
        <main className='flex flex-col lg:flex-row px-[70px] lg:h-[690px] py-[40px] lg:gap-28 items-center justify-between'>
            <div className='flex justify-center flex-col lg:gap-8 lg:w-[550px] lg:h-[435px] '>
                <p className='text-[64px] font-bold text-[#1a1a1a] leading-[0.87]'>Handcrafted with care to make you feel at home</p>
                <p className='text-[20px] text-[#4D4D4D]'>Discover different collections of unique furniture available  to beautify your personal space and to make you feel comfortable.</p>
                <button className='bg-[#ec7d22] rounded-lg py-[15px] px-8 w-fit text-white text-base mt-3'>SHOP NOW</button>
            </div>
            <div>
                <img src={img} alt='living-room' className='h-[610px] w-[640px]'/>
            </div>
        </main>
    );
}

export default Main;