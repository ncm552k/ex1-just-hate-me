/* eslint-disable react/jsx-no-useless-fragment */
import MainLayout from 'layouts/MainLayout'
import AddEmployee from 'pages/AddEmployee'
import Employee from 'pages/Employee'
import { Outlet } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'employees',
        element: <Outlet />,
        children: [
          { path: '', element: <Employee /> },
          { path: 'add', element: <AddEmployee /> },
        ],
      },
    ],
  },
]

export default routes
