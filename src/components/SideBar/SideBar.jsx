import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLink = [
  {
    to: '/employees',
    content: 'Employees',
  },
  {
    to: '/employees/add',
    content: 'Adjust Employees',
  },
  {
    to: '/employees/birthday',
    content: 'Members Birthday',
  },
]

const active = 'text-md px-4 py-[2px] text-[14px] bg-primary text-white'
const normal = 'text-md px-4 py-[2px] text-[14px]'

const SideBar = () => {
  return (
    <>
      <div className='py-3 flex-grow-0'>
        <img
          className='mx-auto'
          src='https://opms.ntq.solutions/web/binary/company_logo?db=opms11&company=1'
          alt='logo'
        />
      </div>
      <div className='pt-2 flex flex-col'>
        <Link to='/employees' className='text-primary font-medium text-md px-2'>
          Employees
        </Link>
        <div className='flex flex-col'>
          {navLink.map((item) => (
            <NavLink end to={item.to} className={({ isActive }) => (isActive ? active : normal)}>
              {item.content}
            </NavLink>
          ))}
        </div>
        <Link to='/departments' className='text-primary font-medium text-md px-2'>
          Departments
        </Link>
        <Link to='/terminations' className='text-primary font-medium text-md px-2'>
          Terminations Requests
        </Link>
      </div>
    </>
  )
}

export default SideBar
