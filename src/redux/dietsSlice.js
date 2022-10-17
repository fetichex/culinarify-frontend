import { createSlice } from '@reduxjs/toolkit'
import { getDiets } from './utils/thunk'

const initialState = {
  diets: [],
  isLoading: false
}

const dietslSlice = createSlice({
  name: 'diets',
  initialState,
  reducers: {},
  extraReducers: {
    [getDiets.pending]: (state) => {
      state.isLoading = true
    },
    [getDiets.fulfilled]: (state, action) => {
      state.isLoading = false
      state.diets = action.payload
    },
    [getDiets.rejected]: (state) => {
      state.isLoading = false
    }
  }
})

export const selectDiets = (state) => state.diet.diets

export default dietslSlice.reducer
