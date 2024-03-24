import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';

export default async function Topmenu() {
    const session = await getServerSession(authOptions)

    return (
            <div className="h-16 bg-blue-900 fixed top-0 left-0 right-0 
            z-30 border-t border-b border-gray-200 flex flex-row text-white">
            <Image src={'/img/logo.png'} className='h-full w-auto' alt='logo'
            width={0} height={0} sizes='100vh'/>
            <TopMenuItem title='Select Car' pageRef='/car'/>
            <TopMenuItem title='Reservations' pageRef='/reservations'/>
            <TopMenuItem title='About' pageRef='/about'/>   
            
            <div className='flex flex-row absolute right-0 h-full'>
            <TopMenuItem title='Cart' pageRef='/cart'/>
            {
                session? <Link href="api/auth/signout">
                    <div className='flex items-center h-full px-2 text-white text-sm'>Sign-Out of {session.user?.name}</div>
                </Link>
                :  <Link href="api/auth/signin">
                    <div className='flex items-center h-full px-2 text-white text-sm'>
                    Sign-In</div>
                </Link>
            } 
            </div>        
        </div>
    );
}