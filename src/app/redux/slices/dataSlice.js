import { createSlice } from '@reduxjs/toolkit'
import EMPLOYEES from 'constants/data'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  data: EMPLOYEES,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addEmploy: (state, action) => {
      state.data.push({
        id: uuidv4(),
        name: action.payload.name,
        email: action.payload.email,
        job: action.payload.job,
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addEmploy } = dataSlice.actions

export default dataSlice.reducer
