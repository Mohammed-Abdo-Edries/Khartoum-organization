import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineCancelPresentation } from "react-icons/md"
import Drawer from '@mui/material/Drawer'
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='navbar max-w-full sticky top-0 backdrop-blur-2xl flex justify-between
         bg-white z-10 px-4 pt-4 h-20 border-b-4 border-blue-950'>
            <button onClick={() => setOpen(true)}><GiHamburgerMenu className='pb-4 text-4xl text-blue-950' /></button>
            <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)} >
                <div className='relative'>
                    <MdOutlineCancelPresentation onClick={() => setOpen(false)} className='absolute right-0 mx-4 text-4xl my-4' />
                    <ul dir="rtl" className='mt-16 text-xl'>
                        <li className=''>
                            <a className='sm:pl-52 pl-32 pr-4 pt-2 text-right border-y-2 border-gray-800' onClick={() => setOpen(false)} href='#Banner'>نبذه عن المنظمة</a>
                        </li>
                        <li className=''>
                            <a className='sm:pl-64 pl-44 pr-4 text-right border-b-2 border-gray-800' onClick={() => setOpen(false)} href='#Members'>الأعضاء</a>
                        </li>
                        <li className=''>
                            <a className='sm:pl-60 pl-40 pr-4 text-right border-b-2 border-gray-800' onClick={() => setOpen(false)} href='#Contact'>تواصل معنا</a>
                        </li>
                    </ul>
                    <div className='sm:mt-96 mt-[calc(70vh)] sm:mx-28 mx-16 flex text-xl'>
                        <div className='px-2'>
                            <a href='https://www.facebook.com/profile.php?id=61555803090077&mibextid=LQQJ4d' target='_blank' rel='noopener noreferrer'><FaFacebookSquare /></a>
                        </div>
                        <div className='px-2'>
                            <a href='https://whatsapp.com/channel/0029VaGlx0jFHWq0le52TM3t' target='_blank' rel='noopener noreferrer'><FaWhatsapp /></a>
                        </div>
                        <div className='px-2'>
                            <a href='mailto:Khartoumorganization@gmail.com' target='_blank' rel='noopener noreferrer'><MdEmail /></a>
                        </div>
                    </div>
                </div>
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