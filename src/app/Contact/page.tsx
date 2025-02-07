import React from 'react';
import Image from 'next/image';
import phone from '@/assets/phone.png';
import mail from '@/assets/mail.png';

export default function Contact () {
  return (
    <section id="contact" className="flex flex-col relative items-center text-center">
        <div className="flex flex-col w-full items-center p-4 rounded-tl-3xl rounded-br-3xl green-section ">
            <div className="w-full pt-4 pb-2">
                <h1 className="text-3xl font-special-elite ">Contact Us</h1>
            </div>
            <div className='flex flex-col sm:flex-row w-full pb-4'>
                <div className="flex flex-col w-full sm:w-1/2 align-middle justify-center">
                    <Image src={phone} width={200} height={200} alt='phone' className='m-auto'/> 
                    <span className="font-bold text-2xl">(760) 964-3605</span>
                </div>
                <div className="flex flex-col w-full sm:w-1/2 align-middle justify-center">
                    <Image src={mail} width={200} height={200} alt='mail' className='m-auto'/> 
                    <span className="font-bold text-2xl">info@threetownhope.com</span>
                </div>
            </div>
        </div>

    </section>
  )
}
