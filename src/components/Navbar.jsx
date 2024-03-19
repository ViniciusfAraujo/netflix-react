import React from 'react'
import { Link } from 'react-router-dom'
import LogoNetflix from './logoNetflix'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <LogoNetflix/>
      </Link>
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Entrar</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 cursor-pointer text-white rounded'>Inscreva-se</button>
          </Link>
        </div>
    </div>
  )
}

export default Navbar