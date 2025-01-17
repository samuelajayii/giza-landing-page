import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='lg:px-[70px] flex-col lg:flex-row px-5 py-[40px] border-t border-[#e6e6e6] flex justify-between'>
            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className='font-bold text-[20px]'>GIZA</h1>
                    <h1 className='font-semibold'>FURNITURE</h1>
                </div>
                <h1 className='text-[14px] text-[#808080] w-[192px]'>126, Hakeem Dickson link road
                    Elfy bus-stop, Lekki Phase 0.</h1>
                <h1 className='text-[#808080]'>+12345678901</h1>
            </div>
            <div>
                <h1 className='text-[#CA6411] lg:mb-6 mb-2 underline lg:text-[20px] text-lg'>Collections</h1>
                <ul className='flex flex-col lg:gap-4 gap-1 text-[#808080]'>
                    <li className='cursor-pointer hover:underline w-fit'>Decors</li>
                    <li className='cursor-pointer hover:underline w-fit'>Office</li>
                    <li className='cursor-pointer hover:underline w-fit'>Kitchen</li>
                    <li className='cursor-pointer hover:underline w-fit'>Bathroom</li>
                    <li className='cursor-pointer hover:underline w-fit'>Bedroom</li>
                    <li className='cursor-pointer hover:underline w-fit'>Dining room</li>
                    <li className='cursor-pointer hover:underline w-fit'>Living room</li>
                </ul>
            </div>
            <div>
                <h1 className='text-[#CA6411] lg:mb-6 mb-2 underline lg:text-[20px] text-lg '>Information</h1>
                <ul className='flex flex-col lg:gap-4 gap-1 text-[#808080]'>
                    <li className='cursor-pointer hover:underline w-fit'>Login & Account</li>
                    <li className='cursor-pointer hover:underline w-fit'>Privacy Policy</li>
                    <li className='cursor-pointer hover:underline w-fit'>Refund Policy</li>
                </ul>
            </div>
            <div className='flex flex-col w-[271px]'>
                <h1 className='text-[#CA6411] lg:mb-4 my-2 underline w-fit lg:text-[20px] text-lg '>Newsletter</h1>
                <p className='text-[#808080] mb-6'>Subscribe to our newsletter and get all the latest information and offers</p>

                <div className='border rounded-lg overflow-hidden w-fit border-[#CCCCCC] flex flex-row items-center justify-center'>
                    <input type='email' className='outline-none px-4 h-full' placeholder='example@email.com '></input>
                    <FontAwesomeIcon icon={faArrowRight} className='bg-[#F09851] py-3 px-5 text-white' />
                </div>

                <span className='flex flex-row items-center gap-2 mb-4 mt-10'>
                    <p className='text-[#808080] gap-4'>Follow Us</p>
                    <span className='h-[0.8px] w-8 bg-[#808080]'></span>
                </span>

                <div className='flex gap-8'>
                    <FontAwesomeIcon icon={faFacebookF}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;