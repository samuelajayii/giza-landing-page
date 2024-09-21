import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faMagnifyingGlass, faBagShopping} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
            <nav className='h-[100px] border-b border-[#e6e6e6] flex items-center justify-between px-[70px] bg-[#f8f8f8]'>
            <div className='hidden lg:flex'>
                <ul className='flex items-center justify-center gap-8 text-[#2d2c2c]'>
                    <li className='cursor-pointer'>Collections</li>
                    <li className='cursor-pointer'>New Arrivals</li>
                    <li className='cursor-pointer'>Best Sellers</li>
                    <li className='cursor-pointer'>Blogs</li>
                </ul>
            </div>
            <div className='flex items-center justify-center'>
                <h1 className='text-[31px] font-bold lg:-ml-44'>GIZA</h1>
            </div>
            <div className='lg:flex hidden items-center gap-8'>
                <FontAwesomeIcon className='cursor-pointer' icon={faUser} />
                <FontAwesomeIcon className='cursor-pointer'icon={faMagnifyingGlass} />
                <FontAwesomeIcon className='cursor-pointer' icon={faBagShopping} />
            </div>
        </nav>
    );
}

export default Header;