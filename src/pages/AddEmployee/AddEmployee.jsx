/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { generateEmail, getJobList } from 'utils/dataFunc'
import { useDispatch } from 'react-redux'
import { removeVietnamese } from 'utils/removeVietnamese'
import { addEmploy } from 'app/redux/slices/dataSlice'

const schema = yup.object({
  name: yup.string().required(),
  job: yup.string().required(),
})

const jobList = getJobList()

const AddEmployee = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    let formatName = removeVietnamese(data.name)
    const email = generateEmail(formatName)
    dispatch(
      addEmploy({
        name: data.name,
        email,
        job: data.job,
      }),
    )
    reset()
  }

  return (
    <>
      <header className='py-3 px-3 flex border-b-[2px] min-h-[100px]'>
        <h1 className='text-xl font-semibold text-gray-500 basis-1/2'>Add Employee</h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-[450px] mx-auto mt-3'>
        <div className='mt-3'>
          <label htmlFor='name'>Name</label>
          <input
            {...register('name')}
            placeholder='Add your name'
            className='w-full p-1 outline-none border border-gray-300 mt-1'
            id='name'
          />
          <p className='text-red-600 text-sm'>{errors.name?.message}</p>
        </div>

        <div className='mt-3'>
          <label htmlFor='job'>Job</label>
          <select {...register('job')} className='w-full p-1 outline-none border border-gray-300 mt-1' id='job'>
            {jobList.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>

        <input type='submit' value='Add Employee' className='bg-primary text-white p-2 mx-auto block mt-3' />
      </form>
    </>
  )
}

export default AddEmployee
