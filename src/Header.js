/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { List, ListItem, ListItemButton, ListItemText, Box, SwipeableDrawer, Divider } from '@mui/material'
import { useState } from 'react';


const Header = () => {

    const [menu, setMenu] = useState(false);
    const toggleDrawer = (newMenu) => () => {
        setMenu(newMenu);
    };


    return (
        <nav className='h-[100px] border-b border-[#e6e6e6] flex items-center justify-between lg:px-[70px] px-5 bg-[#f8f8f8]'>
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
                <FontAwesomeIcon className='cursor-pointer' icon={faMagnifyingGlass} />
                <FontAwesomeIcon className='cursor-pointer' icon={faBagShopping} />
            </div>

            <div className='cursor-pointer lg:hidden flex items-center gap-6'>
                <SwipeableDrawer open={menu} onOpen={() => { }} onClose={toggleDrawer(false)}>
                    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                        <List>
                            <ListItem >
                                <ListItemButton>
                                    <ListItemText>Collections</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            {/* <Divider /> */}
                            <ListItem >
                                <ListItemButton>
                                    <ListItemText>New Arrivals</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            {/* <Divider /> */}
                            <ListItem >
                                <ListItemButton>
                                    <ListItemText>Best Sellers</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            {/* <Divider /> */}
                            <ListItem >
                                <ListItemButton>
                                    <ListItemText>Blogs</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem >
                                <ListItemButton>
                                    <ListItemText><FontAwesomeIcon className='cursor-pointer' icon={faUser} /> Profile</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem >
                                <ListItemButton>
                                    <ListItemText><FontAwesomeIcon className='cursor-pointer' icon={faMagnifyingGlass} /> Search</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem >
                                <ListItemButton>
                                    <ListItemText><FontAwesomeIcon className='cursor-pointer' icon={faBagShopping} /> Cart</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </SwipeableDrawer>
            </div>

            <FontAwesomeIcon icon={faBars} className='text-xl lg:hidden' onClick={toggleDrawer(true)} />
        </nav>
    );
}

export default Header;