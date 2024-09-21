import React from 'react';
import pic1 from './img/1.svg'
import pic2 from './img/2.svg'
import pic3 from './img/3.svg'
import pic4 from './img/4.svg'

const Section4 = () => {
    return (
        <div className='lg:px-[70px] px-5 py-[60px] flex items-center flex-col justify-center'>
            <div className='flex items-center justify-center flex-col gap-4 lg:w-[640px] mb-10'>
                <h1 className='text-[39px] text-center'>Interior Design Inspirations</h1>
                <h1 className='text-center text-[20px] text-[#808080]'>Every home needs a comfortable and friendly atmosphere. Our designers already came up with 100+ ideas of arrangements that might inspire you.</h1>
            </div>

            <div className='flex flex-col flex-wrap gap-4 justify-center' >
                <div className='flex gap-4'>
                    <img src={pic1} alt='' className='min-w-[27vw]'/>
                    <img src={pic2} alt='' className='min-w-[27vw]'/>
                </div>
                <div className='flex gap-4'>
                    <img src={pic3} alt='' className='min-w-[27vw]'/>
                    <img src={pic4} alt='' className='min-w-[27vw]'/>
                </div>
            </div>
        </div>
    );
}

export default Section4;