import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import Drawer from '@mui/material/Drawer'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='navbar max-w-full sticky top-0 backdrop-blur-2xl flex justify-between
         bg-white z-10 px-4 pt-4 h-20 border-b-4 border-blue-950'>
            <button onClick={() => setOpen(true)}><GiHamburgerMenu className='pb-4 text-4xl text-blue-950' /></button>
            <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)} >
                <ul dir="rtl" className='mt-8 mr-4 w-36'>
                    <li className='w-full text-right'>
                        <button className='w-full text-right' onClick={() => setOpen(false)}><a onClick={() => setOpen(false)} href='#Banner'>نبذه عن المنظمة</a></button>
                    </li>
                    <li className='w-full text-right'>
                        <button className='w-full text-right' onClick={() => setOpen(false)}><a onClick={() => setOpen(false)} href='#Members'>الأعضاء</a></button>
                    </li>
                    <li className='w-full text-right'>
                        <button className='w-full text-right' ><a onClick={() => setOpen(false)} href='#Contact'>تواصل معنا</a></button>
                    </li>
                </ul>
            </Drawer>
            <div className='relative'>
                <img src='/logo.jpg' alt='' className='absolute w-10 h-11 top-0 right-0 mr-2 sm:mr-8' />
                <div className='relative logo w-40 mr-8 sm:mr-14'>
                    <h1 className='absolute top-0 text-xl font-bold text-blue-950 w-full'>منظــمــة الخــرطـــوم</h1>
                    <h2 className='absolute top-5 text-base text-green-700 w-full'> للرعاية الإنسانية والتنمية</h2>
                </div>
            </div>
        </div>
    )
}

export default Navbar