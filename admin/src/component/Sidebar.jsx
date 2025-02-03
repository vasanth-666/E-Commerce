import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaSquarePlus } from 'react-icons/fa6'
import { FaListAlt } from 'react-icons/fa'
import { MdFactCheck } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'

const Sidebar = ({ token, setToken }) => {
    return (
        <div className='max-sm:flexCenter max-xs:pb-4 sm:w-1/4 sm:min-h-screen p-6'>
            {token && (
                <div className='absolute top-5 right-5'>
                    <button onClick={() => setToken('')} className='flex items-center gap-x-2 text-red-500 hover:text-red-600 transition-all font-medium'>
                        <BiLogOut className='text-lg' />
                        <span className='hidden lg:inline'>Logout</span>
                    </button>
                </div>
            )}

            <div className='flex max-sm:items-center sm:flex-col pt-6'>
                <div className='flex sm:flex-col gap-x-6 gap-y-6 sm:pt-12'>

                    <NavLink to={'/'} className={({ isActive }) =>
                        isActive
                            ? "flexStart gap-x-3 p-4 font-semibold text-secondary border-2 border-secondary rounded-xl transition-all"
                            : "flexStart gap-x-3 p-4 font-medium text-gray-700 hover:border-2 hover:border-secondary rounded-xl transition-all"
                    }>
                        <FaSquarePlus />
                        <div className='hidden lg:flex'>Add Items</div>
                    </NavLink>

                    <NavLink to={'/list'} className={({ isActive }) =>
                        isActive
                            ? "flexStart gap-x-3 p-4 font-semibold text-secondary border-2 border-secondary rounded-xl transition-all"
                            : "flexStart gap-x-3 p-4 font-medium text-gray-700 hover:border-2 hover:border-secondary rounded-xl transition-all"
                    }>
                        <FaListAlt />
                        <div className='hidden lg:flex'>List Items</div>
                    </NavLink>

                    <NavLink to={'/orders'} className={({ isActive }) =>
                        isActive
                            ? "flexStart gap-x-3 p-4 font-semibold text-secondary border-2 border-secondary rounded-xl transition-all"
                            : "flexStart gap-x-3 p-4 font-medium text-gray-700 hover:border-2 hover:border-secondary rounded-xl transition-all"
                    }>
                        <MdFactCheck className='text-lg' />
                        <div className='hidden lg:flex'>Orders</div>
                    </NavLink>

                </div>
            </div>

        </div>
    )
}

export default Sidebar
