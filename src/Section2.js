import React from 'react';
import image from './img/rectangle 2.svg'

const Section2 = () => {
    return (
        <div className='flex flex-col px-5 lg:px-[70px] '>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <span className='flex flex-row items-center gap-2 mb-4'>
                        <p className='text-[#808080] gap-4'>About Us</p>
                        <span className='h-[0.8px] w-8 bg-[#808080]'></span>
                    </span>
                    <p className='font-semibold text-[20px] hidden lg:block'>For Urban</p>
                    <p className='font-semibold text-[20px] hidden lg:block'>Living</p>
                </div>
                <p className='text-[#808080] w-[50vw]'>We believe that good design should be eye catching and comfortable. For this reason, we collaborate with the best designers to create authentic furniture that is suitable for the need of Urban life. </p>
            </div>
            <div className='flex items-center flex-col lg:flex-row gap-10 lg:gap-[131px]'>
                <img src={image} alt='' className='w-[554px] mt-10 lg:h-[640px]' />
                <div>
                    <div className='flex flex-col justify-center gap-6 lg:gap-8 '>
                        <p className='text-[48px] font-bold text-[#1a1a1a] leading-none'>QUALITY KEEPS DRIVING US FORWARD.</p>
                        <p className='text-[20px] text-[#808080]'>We have more than 20 years of experience producing and delivering furniture nationwide. More tha ten million pieces of furniture have been delivered to businesses and families in Nigeria.</p>
                    </div>
                    <button className='mt-12 rounded-lg py-[15px] px-8 w-fit text-[#EC7D22] border border-[#ec7d22] text-base hover:scale-110 transition-all hover:text-white hover:bg-[#ec7d22]'>LEARN MORE</button>
                </div>
            </div>

        </div>
    );
}

export default Section2;