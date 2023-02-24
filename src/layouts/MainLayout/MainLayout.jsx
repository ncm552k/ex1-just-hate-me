import SideBar from 'components/SideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex h-screen'>
      <div className='basis-[12.5%] border-r-[2px]'>
        <SideBar />
      </div>
      <div className='basis-[87.5%] h-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
