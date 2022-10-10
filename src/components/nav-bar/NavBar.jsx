import { NavLink } from 'react-router-dom'

import { GiHamburgerMenu, GiTireIronCross } from 'react-icons/gi'
import { useState } from 'react'

const navData = [
    {
        id: 1,
        title: 'Home',
        link: 'home'
    },
    {
        id: 2,
        title: 'Topics',
        link: 'topics'
    },
    {
        id: 3,
        title: 'Statistics',
        link: 'statistics'
    },
    {
        id: 4,
        title: 'Blogs',
        link: 'blogs'
    },

]

const NavBar = () => {
    const [navIcon, setNavIcon] = useState(false)
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center my-4'>
            <div className='text-2xl text-green-700 font-bold'>
                <p>Quiz-Wiz</p>
            </div>
            <nav className='hidden lg:flex gap-4 text-xl font-semibold'>
                {
                    navData.map(el => <NavLink key={el.id} to={el.link} className={({ isActive }) => isActive ? 'text-amber-900 font-bold' : ''}>{el.title}</NavLink>)
                }
            </nav>
            <div className='lg:hidden'>
                <div className={
                    navIcon ?
                    'absolute z-30 top-0 left-0 w-3/4 bg-purple-50 border-r h-screen flex justify-center items-center text-center ease-in-out duration-1000'
                    :
                    'absolute z-30 top-0 -left-full w-3/4 bg-purple-50 border-r h-screen flex justify-center items-center text-center ease-in-out duration-1000'
                }>
                    <nav className='flex flex-col gap-4 text-xl font-semibold'>
                        {
                            navData.map(el => <NavLink key={el.id} to={el.link} className={({ isActive }) => isActive ? 'text-amber-900 font-bold' : ''}>{el.title}</NavLink>)
                        }
                    </nav>
                </div>
            </div>
            <div className='text-2xl font-semibold lg:hidden'>
                {
                    navIcon ?
                        <GiTireIronCross onClick={() => { setNavIcon(!navIcon) }} />
                        :
                        <GiHamburgerMenu onClick={() => { setNavIcon(!navIcon) }} />
                }
            </div>
        </div>
    )
}

export default NavBar