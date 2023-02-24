import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: [],
  page: 1,
  searchTerm: '',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const { addEmploy } = filterSlice.actions

export default filterSlice.reducer
