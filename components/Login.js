'use client'
import { Fugaz_One } from 'next/font/google';
import React, { useState } from 'react'
import Button from './Button';
import { useAuth } from '@/context/AuthContext';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [authenticating, setAuthenticating] = useState(false)

  const { signup, login } = useAuth()

  async function handleSubmit() {
      if (!email || !password || password.length < 6) {
          return
      }
      setAuthenticating(true)
      try {
          if (isRegister) {
              console.log('Signing up a new user')
              await signup(email, password)
          } else {
              console.log('Logging in existing user')
              await login(email, password)
          }

      } catch (err) {
          console.log(err.message)
      } finally {
          setAuthenticating(false)
      }

  }

  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + fugaz.className}>{isRegister ? 'Register' : 'Log In'}</h3>
      <p>You&#39;re one step away!</p>
      <form className='' >
        <input value={email} onChange={(e) => {setEmail(e.target.value)}} className='max-w-[400px] w-full mx-auto px-3 mb-3 duration-200 hover:border-purple-600 focus:border-purple-600 py-2 sm:py-3 border border-solid border-purple-400 rounded-full outline-none' placeholder='Email' autoComplete="username" required/>
        <input value={password} onChange={(e) => {setPassword(e.target.value)}}  className='max-w-[400px] w-full mx-auto px-3 mb-3 duration-200 hover:border-purple-600 focus:border-purple-600 py-2 sm:py-3 border border-solid border-purple-400 rounded-full outline-none' placeholder='Password' type='password' autoComplete="current-password" required />
        <div className='max-w-[400px] w-full mx-auto mb-3'>
          <Button clickHandler={handleSubmit} text={authenticating ? 'Submitting' : "Submit"} type='submit' full />  
        </div>
      </form>
            <p className='text-center'>{isRegister ? 'Already have an account? ' : 'Don\'t have an account? '}<button onClick={() => setIsRegister(!isRegister)} className='text-purple-600'>{isRegister ? 'Sign in' : 'Sign up'}</button>
            </p>
       </div>
  )
}
