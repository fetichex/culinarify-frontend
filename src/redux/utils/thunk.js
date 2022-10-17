import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const createRecipe = createAsyncThunk(
  'recipes/createRecipe',
  async (recipe, thunkAPI) => {
    try {
      const response = await axios.post('https://culinarify.onrender.com/recipes', recipe)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        /* 'http://localhost:3002/results' || */ 'https://culinarify.onrender.com/recipes'
      )
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const findRecipes = createAsyncThunk(
  'recipes/findRecipes',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://culinarify.onrender.com/recipes/search?name=${query}`
      )
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getDetail = createAsyncThunk(
  'detail/getDetail',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`https://culinarify.onrender.com/recipes/${id}`)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getDiets = createAsyncThunk(
  'recipes/getDiets',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://culinarify.onrender.com/diets')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
