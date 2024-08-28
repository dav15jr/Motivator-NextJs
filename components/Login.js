import { Fugaz_One } from 'next/font/google';
import React from 'react'
import Button from './Button';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Login() {

  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + fugaz.className}>Log In/ Register</h3>
      <p>You&#39;re one step away!</p>
      <input className='max-w-[400px] w-full mx-auto px-3 duration-200 hover:border-purple-600 focus:border-purple-600 py-2 sm:py-3 border border-solid border-purple-400 rounded-full outline-none' placeholder='Email' />
      <input className='max-w-[400px] w-full mx-auto px-3 duration-200 hover:border-purple-600 focus:border-purple-600 py-2 sm:py-3 border border-solid border-purple-400 rounded-full outline-none' placeholder='Password' type='password' />
      <div className='max-w-[400px] w-full mx-auto'>
        <Button text="Submit" full/>  
      </div>
      <p className='text-center'>Don&#39;t have an account? <span className='text-purple-600'>Sign up</span> </p>
    </div>
  )
}
