import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDiets } from '../../redux/utils/thunk'
import { selectDiets } from '../../redux/dietsSlice'
import { setFilteredRecipes, setPage } from '../../redux/recipesSlice'
import { Label, CheckBox, CheckBoxes } from './Filter.styles'

const Filter = () => {
  const diets = useSelector((state) => selectDiets(state))
  const [selected, setSelected] = useState([])
  const dispatch = useDispatch()

  const CheckOnChange = (name) => {
    const find = selected.indexOf(name)

    if (find > -1) {
      selected.splice(find, 1)
    } else {
      selected.push(name)
    }
    setSelected([...selected])
    dispatch(setPage(1))
    dispatch(setFilteredRecipes(selected))
  }
  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch])

  return (
    <>
      <CheckBoxes>
        {diets.map((diet) => (
          <Label key={diet.id} htmlFor={diet.id}>
            <CheckBox
              onChange={() => CheckOnChange(diet.name)}
              selected={selected.includes(diet.name)}
              key={diet.id}
              type="checkbox"
              id={diet.id}
            />
            {diet.name}
          </Label>
        ))}
      </CheckBoxes>
    </>
  )
}

export default Filter
