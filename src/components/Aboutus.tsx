'use client'
import { useState } from "react"
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useWindowListener } from "@/hooks/useWindowListener"


export default function AboutUs() {
    return (
        <div className="mt-20 rounded-lg bg-white flex flex-col justify-center items-center">
            <div className="text-2xl font-mono">ABOUT US</div>
            <div className="mt-5 text-lg font-mono text-center">
                <div>We are committed to providing you with a memorable experience every time you choose to rent a car with us.</div>
                <div>We not only offer car rental services but also provide convenience and assurance that you will have an excellent experience every time.</div>
                <div>With quality vehicles and professional service, we are ready to make your journey enjoyable and truly impressive.</div>
            </div>
            <div className="flex flex-row mt-5">
                <div className='rounded-lg w-[230px] h-[350px] mx-3 my-5 relative '>
                    <Image src={'/img/cover3.jpg'} alt='Product Picture'
                        fill={true} className='object-cover absolute rounded-lg shadow-xl'/>
                    <div className="relative top-20 z-20 text-center text-2xl font-medium">Discounts & benefit</div>
                </div>
                <div className='rounded-lg w-[230px] h-[350px] mx-3 my-5 relative '>
                    <Image src={'/img/cover3.jpg'} alt='Product Picture'
                        fill={true} className='object-cover absolute rounded-lg shadow-xl'/>
                    <div className="relative top-20 z-20 text-center text-2xl font-medium">Daily, weekly or monthly</div>
                </div>
                <div className='rounded-lg w-[230px] h-[350px] mx-3 my-5 relative '>
                    <Image src={'/img/cover3.jpg'} alt='Product Picture'
                        fill={true} className='object-cover absolute rounded-lg shadow-xl'/>
                    <div className="relative top-20 z-20 text-center text-2xl font-medium">Online check-in</div>
                </div>
            </div>
        </div>
    )
}