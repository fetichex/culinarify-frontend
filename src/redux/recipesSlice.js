import { createSlice } from '@reduxjs/toolkit'
import { getRecipes, findRecipes, createRecipe } from './utils/thunk'

const initialState = {
  recipes: [],
  filteredRecipes: [],
  page: 1,
  isLoading: false,
  rejected: false
}

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setAscen: (state) => {
      state.filteredRecipes = state.filteredRecipes.sort((a, b) => {
        const name1 = !a.title ? a.name : a.title
        const name2 = !b.title ? b.name : b.title
        if (name1 < name2) {
          return -1
        }
        if (name1 > name2) {
          return 1
        }
        return 0
      })
    },
    setDescen: (state) => {
      state.filteredRecipes = state.filteredRecipes.sort((a, b) => {
        const name1 = !a.title ? a.name : a.title
        const name2 = !b.title ? b.name : b.title
        if (name1 > name2) {
          return -1
        }
        if (name1 < name2) {
          return 1
        }
        return 0
      })
    },
    setMinorToMajor: (state) => {
      state.filteredRecipes = state.filteredRecipes.sort((a, b) => {
        const score1 = a.healthScore
        const score2 = b.healthScore
        if (score1 < score2) {
          return -1
        }
        if (score1 > score2) {
          return 1
        }
        return 0
      })
    },
    setMajorToMinor: (state) => {
      state.filteredRecipes = state.filteredRecipes.sort((a, b) => {
        const score1 = a.healthScore
        const score2 = b.healthScore
        if (score1 > score2) {
          return -1
        }
        if (score1 < score2) {
          return 1
        }
        return 0
      })
    },
    setAll: (state) => {
      state.filteredRecipes = state.recipes
    },
    setFilteredRecipes: (state, action) => {
      const totalRecipes = state.recipes
      const totalDiets = action.payload
      const filterRecipes = totalRecipes.filter((recipe) => {
        return totalDiets.every((diet) => {
          return recipe.diets.includes(diet)
        })
      })
      if (filterRecipes.length === 0) {
        state.rejected = true
      } else {
        state.filteredRecipes = filterRecipes
        state.rejected = false
      }
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    nextPage: (state) => {
      state.page++
    },
    prevPage: (state) => {
      state.page--
    }
  },
  extraReducers: {
    [getRecipes.pending]: (state) => {
      state.isLoading = true
    },
    [getRecipes.fulfilled]: (state, action) => {
      state.isLoading = false
      state.recipes = action.payload
      state.filteredRecipes = action.payload
    },
    [getRecipes.rejected]: (state) => {
      state.isLoading = false
      state.rejected = true
    },
    [findRecipes.pending]: (state) => {
      state.isLoading = true
    },
    [findRecipes.fulfilled]: (state, action) => {
      state.isLoading = false
      state.rejected = false
      state.recipes = action.payload
      state.filteredRecipes = action.payload
    },
    [findRecipes.rejected]: (state) => {
      state.isLoading = false
      state.rejected = true
      state.recipes = []
      state.filteredRecipes = []
    },
    [createRecipe.pending]: (state) => {
      state.isLoading = true
    },
    [createRecipe.fulfilled]: (state) => {
      state.isLoading = false
      state.rejected = false
    },
    [createRecipe.rejected]: (state) => {
      state.isLoading = false
      state.rejected = true
    }
  }
})

export const selectRecipes = (state) => state.recipes.recipes
export const getRecipesFilter = (state) => state.recipes.filteredRecipes
export const selectIsLoading = (state) => state.recipes.isLoading
export const selectRejected = (state) => state.recipes.rejected

export const {
  setAscen,
  setDescen,
  setRecipes,
  setMinorToMajor,
  setMajorToMinor,
  setAll,
  setFilteredRecipes,
  setPage,
  nextPage,
  prevPage,
  filterByScore
} = recipesSlice.actions

export default recipesSlice.reducer
