import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from './recipesSlice'
import detailReducer from './detailSlice'
import dietReducer from './dietsSlice'
import modalReducer from './modalSlice'

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    detail: detailReducer,
    modal: modalReducer,
    diet: dietReducer
  }
})
