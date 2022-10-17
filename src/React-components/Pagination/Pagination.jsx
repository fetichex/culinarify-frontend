// import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
/* eslint-disable */
import {
  getRecipesFilter,
  setPage,
  nextPage,
  prevPage,
  selectRejected
} from '../../redux/recipesSlice'
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos
} from 'react-icons/md'
import { Paginator, Button, ButtonArrow } from './Pagination.styles'

export const Pagination = ({ recipesPerPage }) => {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.recipes.page)
  const recipes = useSelector((state) => getRecipesFilter(state))
  const rejected = useSelector((state) => selectRejected(state))
  const howManyPages = Math.ceil(recipes.length / recipesPerPage)

  const numberOfPages = []
  for (let i = 1; i <= howManyPages; i++) {
    numberOfPages.push(i)
  }

  // const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])
  // useEffect(() => {
  /* 
    let tempNumberOfPages = [...arrOfCurrButtons]

    const dotsInitial = '...'
    const dotsLeft = '... '
    const dotsRight = ' ...'

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages
    } else if (page >= 1 && page <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length]
    } else if (page === 4) {
      const sliced = numberOfPages.slice(0, 5)
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
    } else if (page > 4 && page < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(page - 2, page)
      const sliced2 = numberOfPages.slice(page, page + 1)
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length
      ]
    } else if (page > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4)
      tempNumberOfPages = [1, dotsLeft, ...sliced]
    } else if (page === dotsInitial) {
      dispatch(setPage(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1))
    } else if (page === dotsRight) {
      dispatch(setPage(arrOfCurrButtons[3] + 2))
    } else if (page === dotsLeft) {
      dispatch(setPage(arrOfCurrButtons[3] - 2))
    }

    setArrOfCurrButtons(tempNumberOfPages)
    dispatch(setPage(page))
  }, [page]) */

  return (
    <Paginator>
      <ButtonArrow
        whileHover={{ scale: 1.1 }}
        onClick={() => dispatch(prevPage())}
        disabled={page <= 1}>
        <MdOutlineArrowBackIosNew />
      </ButtonArrow>
      {!rejected
        ? numberOfPages?.map((number, i) => (
            <Button
              whileHover={{ scale: 1.1 }}
              key={i}
              active={number === page ? 'active' : ''}
              onClick={() => dispatch(setPage(number))}>
              {number}
            </Button>
          ))
        : null}
      <ButtonArrow
        whileHover={{ scale: 1.1 }}
        onClick={() => dispatch(nextPage())}
        disabled={page >= howManyPages}>
        <MdOutlineArrowForwardIos />
      </ButtonArrow>
    </Paginator>
  )
}
