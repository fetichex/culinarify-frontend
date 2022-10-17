import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getRecipesFilter,
  selectIsLoading,
  selectRejected
} from '../../redux/recipesSlice'
import { getRecipes } from '../../redux/utils/thunk'
import { Header } from '../Header/Header'
import { Card } from '../Card/Card'
import { Pagination } from '../Pagination/Pagination'
import Loading from '../Loading/Loading'
import Ordener from '../Controls/Ordener'
import Filter from '../Controls/Filter'
import {
  GridLayout,
  AreaHeader,
  AreaCards,
  CardsContainer,
  Cards,
  Controls
} from './home.styles'

export const Home = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => selectIsLoading(state))
  const rejected = useSelector((state) => selectRejected(state))
  const recipes = useSelector((state) => getRecipesFilter(state))
  const page = useSelector((state) => state.recipes.page)
  const [recipesPerPage] = useState(9)
  const indexOfLastRecipe = page * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <GridLayout>
        <AreaHeader>
          <Header />
        </AreaHeader>
        <Controls>
          <div className="div_uno">
            <p className="p_uno">Order by</p>
            <Ordener />
          </div>
          <div className="div_uno">
            <p className="p_uno">Filter by</p>
            <Filter />
          </div>
        </Controls>
        <AreaCards>
          <div>
            <Pagination recipesPerPage={recipesPerPage} />
          </div>
          <CardsContainer>
            {/* eslint-disable */}
            {!!rejected ? (
              <h1>No recipes</h1>
            ) : (
              <Cards>
                {currentRecipes?.map((recipe) => (
                  <Card
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.title || recipe.name}
                    image={recipe.image}
                    diets={recipe.diets}
                  />
                ))}
              </Cards>
            )}
            {/* eslint-enable */}
          </CardsContainer>
        </AreaCards>
      </GridLayout>
    </>
  )
}
