import React from 'react'
import EmployeeHeader from './components/EmployeeHeader'
import EmployList from './components/EmployList'

const Employee = () => {
  return (
    <div className='flex flex-col h-screen'>
      <EmployeeHeader />
      <EmployList />
    </div>
  )
}

export default Employee
