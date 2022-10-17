import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  setPage,
  setAscen,
  setDescen,
  setMinorToMajor,
  setMajorToMinor
} from '../../redux/recipesSlice'
import { getRecipes } from '../../redux/utils/thunk'
import { CheckBoxes, CheckBox, Label } from './Ordener.styles'

const Ordener = () => {
  const dispatch = useDispatch()
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)

  const handleChangeName = (event) => {
    if (event.target.name === 'a-z' && event.target.checked) {
      dispatch(setPage(1))
      dispatch(setAscen())
      setChecked1(!checked1)
      if (checked2) {
        setChecked2(!checked2)
      }
    } else if (event.target.name === 'z-a' && event.target.checked) {
      dispatch(setPage(1))
      dispatch(setDescen())
      setChecked2(!checked2)
      if (checked1) {
        setChecked1(!checked1)
      }
    } else {
      dispatch(setPage(1))
      dispatch(getRecipes())
    }
  }

  const handleChangeScore = (event) => {
    if (event.target.name === '0-100' && event.target.checked) {
      dispatch(setPage(1))
      dispatch(setMinorToMajor())
      setChecked3(!checked3)
      if (checked4) {
        setChecked4(!checked4)
      }
    } else if (event.target.name === '100-0' && event.target.checked) {
      dispatch(setPage(1))
      dispatch(setMajorToMinor())
      setChecked4(!checked4)
      if (checked3) {
        setChecked3(!checked3)
      }
    } else {
      dispatch(setPage(1))
      dispatch(getRecipes())
    }
  }

  return (
    <>
      <CheckBoxes>
        <section>
          <div>
            <CheckBox
              id="a-z"
              name="a-z"
              checked={checked1}
              type="checkbox"
              onChange={handleChangeName}
            />
          <Label htmlFor="a-z">a-z</Label>
          </div>
          <div>
            <CheckBox
              id="z-a"
              name="z-a"
              checked={checked2}
              type="checkbox"
              onChange={handleChangeName}
            />
            <Label htmlFor="z-a">z-a</Label>
          </div>
        </section>
        <section>
          <div>
            <CheckBox
              id="0-100"
              name="0-100"
              checked={checked3}
              type="checkbox"
              onChange={handleChangeScore}
            />
            <Label htmlFor="0-100">0-100</Label>
          </div>
          <div>
            <CheckBox
              id="100-0"
              name="100-0"
              checked={checked4}
              type="checkbox"
              onChange={handleChangeScore}
            />
            <Label htmlFor="100-0">100-0</Label>
          </div>
        </section>
      </CheckBoxes>
    </>
  )
}

export default Ordener
