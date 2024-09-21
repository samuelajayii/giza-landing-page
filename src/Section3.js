import React from 'react';
import img from './img/rectangle 3.svg'

const Section3 = () => {
    return (
        <div className='flex flex-col lg:flex-row px-5 lg:px-[70px] lg:h-[690px] py-[40px] lg:gap-28 items-center justify-between'>
            <div className='flex justify-center flex-col gap-6 lg:gap-8 lg:w-[550px] lg:h-[435px] '>
                <p className='lg:text-[64px] text-5xl font-bold text-[#1a1a1a] lg:leading-[0.87] leading-none'>CRAFTED JUST FOR YOU</p>
                <p className='text-[20px] text-[#808080]'>We understand that you want a the best furniture for you and your abode, that is why we offer customized order service.</p>
                <button className='mt-4 rounded-lg py-[15px] px-8 w-fit text-[#EC7D22] border border-[#ec7d22] text-base hover:scale-110 transition-all hover:text-white hover:bg-[#ec7d22]'>CUSTOMIZED ORDER</button>
            </div>
            <div>
                <img src={img} alt='' className='lg:h-[610px] mt-12 w-[640px]'/>
            </div>
        </div>
    );
}

export default Section3;