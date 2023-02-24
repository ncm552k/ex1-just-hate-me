import PropTypes from 'prop-types'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email'

const EmployItem = ({ name, job, email }) => {
  return (
    <div className='p-2 flex h-[110px] relative max-w-[320px] border border-gray-300'>
      <div className='basis-1/5 mr-3'>
        <img
          className='w-full h-[75%] object-cover'
          src='https://congluan-cdn.congluan.vn/files/dieulinh/2021/03/09/rose-blackpink-album-1618.jpg'
          alt='avatar'
        />
      </div>
      <div className='basis-4/5'>
        <p className='text-sm'>{name}</p>
        <p className='text-sm'>
          &#x2022;{'  '}
          {job}
        </p>
        <p className='text-xs'>
          <EmailIcon sx={{ fontSize: '14px' }} /> {'    '}
          {email}
        </p>
      </div>
      <div className='text-white bg-primary absolute p-1 bottom-1 right-1'>Follow</div>
    </div>
  )
}

EmployItem.propTypes = {
  email: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default EmployItem
