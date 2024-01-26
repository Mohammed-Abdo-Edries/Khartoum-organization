import React from 'react'
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Contact = () => {
    return (
        <div id='Contact' className='pt-4'>
            <div dir='rtl' className='pt-4 px-4 sm:px-20'>
                للتواصل الرسمي معنا ندعوكم لزيارة مكتب منظمتنا ,إن ابواب مكتبنا مشرعة لكم ولكل من يود التعرف علي منظمتنا عن كثب لتقديم الاقتراحات البناءة والانضمام لنا لتكونوا جزءاً من هذا الصرح.
                <h3>نحن في إنتظاركم!</h3>
                <h3 className='text-green-700 text-xl'>المكان وساعات العمل :</h3>
                <div>ولاية كسلا, غرب القاش ,وزارة الشباب والرياضة.</div>
                <div>من السبت إلي الخميس من الساعة 9:00AM إلي 2:00PM</div>
                <h3>حساباتنا :</h3>
                <div className='flex text-xl justify-center text-green-700 py-4'>
                    <div className='px-2'>
                        <a href='https://www.facebook.com/profile.php?id=61555803090077&mibextid=LQQJ4d' target='_blank' rel='noopener noreferrer'><FaFacebookSquare /></a>
                    </div>
                    <div className='px-2'>
                        <a href='https://whatsapp.com/channel/0029VaGlx0jFHWq0le52TM3t' target='_blank' rel='noopener noreferrer'><FaWhatsapp /></a>
                    </div>
                    <div className='px-2'>
                        <a href='mailto:Khartoumorganization@gmail.com' target='_blank' rel='noopener noreferrer'><MdEmail /></a>
                    </div>
                    {/* <div className='px-2'> */}
                    {/* <a href='https://whatsapp.com/channel/0029VaGlx0jFHWq0le52TM3t' target='_blank' rel='noopener noreferrer'><FaWhatsapp /></a> */}
                    {/* <BsTwitterX /> */}
                    {/* </div> */}

                    {/* <a herf="" target="_blank" rel="noopener noreferrer" ></a> */}
                    {/* <a herf="" target="_blank" rel="noopener noreferrer" ></a> */}
                </div>
                <div className="block text-center pb-4">&copy; {new Date().getFullYear()} All rights are Reserved</div>
            </div>
        </div>
    )
}

export default Contact