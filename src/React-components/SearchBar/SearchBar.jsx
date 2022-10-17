import { useState } from 'react'
import { useDispatch /* , useSelector */ } from 'react-redux'
import { BsSearch } from 'react-icons/bs'

import { SearchBtn, Input, Search } from './SearchBar.styles'
import { findRecipes } from '../../redux/utils/thunk'
import { setPage } from '../../redux/recipesSlice'

export const SearchBar = () => {
  // const page = useSelector(state => state.recipes.page)
  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(findRecipes(value))
    setValue('')
    dispatch(setPage(1))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <Search>
      <Input
        type="text"
        name="search"
        placeholder="SEARCH"
        autoComplete="off"
        value={value}
        onKeyDown={handleKeyPress}
        onChange={handleChange}></Input>
      <SearchBtn
        onClick={() => {
          handleSubmit()
        }}>
        <BsSearch />
      </SearchBtn>
    </Search>
  )
}
