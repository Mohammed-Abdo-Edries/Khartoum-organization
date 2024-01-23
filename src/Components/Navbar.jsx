import React from 'react'
import Popup from "reactjs-popup"
import { GiHamburgerMenu } from "react-icons/gi"
import { HashLink as Link } from 'react-router-hash-link'
const Navbar = () => {
    return (
        // <BrowserRouter>
        // <Router>
        <div className='navbar max-w-full sticky top-0 backdrop-blur-2xl flex justify-between
         bg-white z-10 px-4 pt-4 h-20 border-b-4 border-blue-950'>
            <Popup trigger={<button><GiHamburgerMenu className='pb-4 text-4xl text-blue-950' /></button>}
                position="bottom left" closeOnDocumentClick >
                <ul dir="rtl" className='bg-blue-950 rounded-lg py-2 text-center text-white'>
                    <li>
                        <Link to="#Banner" className='py-2 px-4'>نبذه عن المنظمة</Link>
                    </li>
                    <li>
                        <Link to="#Members" className='py-2 px-4'>الأعضاء</Link>
                    </li>
                    <li>
                        <Link to="#Contact" className='py-2 px-4'>تواصل معنا</Link>
                    </li>
                </ul>
            </Popup>
            <div className='relative logo mr-4 w-40'>
                <h1 className='absolute top-0 text-xl font-bold text-blue-950'>منظــمــة الخــرطـــوم</h1>
                <h2 className='absolute top-5 text-base text-green-700'> للرعاية الإنسانية والتنمية</h2>
            </div>
        </div>
        // </Router>
        // </BrowserRouter>
    )
}

export default Navbar