import { createSlice } from '@reduxjs/toolkit'
import { getDetail } from './utils/thunk'

const initialState = {
  detailRecipe: {},
  detailIsLoading: false
}

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setDetail: (state, action) => {
      state.detailRecipe = action.payload
    }
  },
  extraReducers: {
    [getDetail.pending]: (state) => {
      state.detailIsLoading = true
    },
    [getDetail.fulfilled]: (state, action) => {
      state.detailIsLoading = false
      state.detailRecipe = action.payload
    },
    [getDetail.rejected]: (state) => {
      state.detailIsLoading = false
    }
  }
})

export const { setDetail } = detailSlice.actions

export const selectDetailRecipe = (state) => state.detail.detailRecipe
export const selectDetailIsLoading = (state) => state.detail.detailIsLoading

export default detailSlice.reducer
