import Link from 'next/link';
import * as React from 'react';

export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
    return (
        <header className='flex justify-between pt-1 px-2 max-w-[1400px] mx-auto'>
            <div className='flex item-center space-x-5'>
                <Link href='/'>
                    <img
                        className='w-[40px] rounded-[60px] cursor-pointer'
                        src="https://i.pinimg.com/564x/0a/94/21/0a94212623c6d3f6fcfeb017d29948bb.jpg" 
                        alt="" 
                    />
                </Link>
                <div className='hidden md:inline-flex space-x-5 items-center'>
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 className='text-white bg-green-600 py-1 px-3 rounded-full'>Follow</h3>
                </div>
            </div>
            <div className='flex space-x-5 items-center'>
                <h3 className='text-green-600'>Sign in</h3>
                <h3 className='border-green-600 border-[1px] rounded-full px-3 py-1'>Login</h3>
            </div>
        </header>
    );
}
