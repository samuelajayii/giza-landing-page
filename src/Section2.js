import React from 'react';

const Section2 = () => {
    return (
        <div className='flex flex-col lg:flex-row px-[70px] lg:h-[690px] py-[40px] lg:gap-28 items-center justify-between'>
            <div className='flex items-center justify-between'>
                <div>
                    <span className='flex flex-row items-center gap-2 mb-4'>
                        <p className='text-[#808080] gap-4'>About Us</p>
                        <span className='h-[0.8px] w-8 bg-[#808080]'></span>
                    </span>
                    <p className='font-semibold text-[20px]'>For Urban</p>
                    <p className='font-semibold text-[20px]'>Living</p>
                </div>
                <p className='text-[#808080] w-[50vw]'>We believe that good design should be eye catching and comfortable. For this reason, we collaborate with the best designers to create authentic furniture that is suitable for the need of Urban life. </p>
            </div>
            <div>
                <img src={''} alt='' />
            </div>
            <div>
                <div className='flex justify-center flex-col lg:gap-8 lg:w-[550px] lg:h-[435px] '>
                    <p className='text-[64px] font-bold text-[#1a1a1a] leading-[0.87]'>Handcrafted with care to make you feel at home</p>
                    <p className='text-[20px] text-[#4D4D4D]'>Discover different collections of unique furniture available  to beautify your personal space and to make you feel comfortable.</p>
                    <button className='bg-[#ec7d22] rounded-lg py-[15px] px-8 w-fit text-white text-base mt-3'>SHOP NOW</button>
                </div>
            </div>

        </div>
    );
}

export default Section2;