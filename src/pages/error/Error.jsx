import React from 'react'
import NavBar from '../../components/nav-bar/NavBar'

const Error = () => {
  return (
    <div>
        <NavBar />
        <div className='py-40 w-11/12 mx-auto'>
            <p className='text-lg lg:text-2xl text-center font-semibold bg-gray-300 py-4 rounded-md'>Something went wrong from our end, please check our quiz topics while we fix the issue</p>
        </div>
    </div>
  )
}

export default Error