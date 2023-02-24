import { ZoomIn } from '@mui/icons-material'
import React from 'react'

const EmployeeHeader = () => {
  return (
    <header className='py-3 px-3 flex border-b-[2px] min-h-[100px]'>
      <h1 className='text-xl font-semibold text-gray-500 basis-1/2'>Employees</h1>
      <div className='basis-1/2'>
        <div className='rounded-md border border-gray-400 overflow-hidden relative'>
          <input type='text' className='w-full outline-none py-1 px-2' placeholder='Search...' />
          <ZoomIn
            sx={{
              position: 'absolute',
              top: '50%',
              right: 2,
              transform: 'translateY(-50%)',
            }}
          />
        </div>
      </div>
    </header>
  )
}

export default EmployeeHeader
