import React from 'react';
import Card from './Card';
import pfp1 from './img/pfp1.svg'
import pfp2 from './img/pfp2.svg'
import pfp3 from './img/pfp3.svg'

const Testimonials = () => {
    return (
        <div className='px-[70px] py-[60px] text-[#CA6411] bg-[#FCECDE] flex flex-col items-center justify-center'>
            <h1 className='font-semibold text[#CA6411] text-center'>TESTIMONIALS</h1>
            <h1 className='text-[#1A1A1A] text-[31px] text-center mb-6'>What our customers say</h1>

            <div className='flex flex-row gap-5'>
                <Card text={`I was really satisfied with the services provided by the officials. Keep up the good work!`} name={`Shania Hameed`} star={`4.0`} pfp={pfp1}/>
                <Card text={`Good product and timely delivery. I can’t wait to make my next purchase.`} name={`Moyin Falade`} star={`4.5`} pfp={pfp2}/>
                <Card text={`My wife can’t stop admiring our sofa set. I am very happy you guys delivered.`} name={`Zachary Emeka`} star={`5.0`} pfp={pfp3}/>
            </div>

            <div className='flex gap-2 mt-4 text-center'>
                <div className='h-1 w-12 rounded bg-[#EC7D22]'></div>
                <div className='h-1 w-12 rounded bg-white'></div>
                <div className='h-1 w-12 rounded bg-white'></div>
                <div className='h-1 w-12 rounded bg-white'></div>
            </div>

        </div>
    );
}

export default Testimonials;