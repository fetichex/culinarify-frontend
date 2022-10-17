import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetail } from '../../redux/utils/thunk'
import {
  selectDetailIsLoading,
  selectDetailRecipe
} from '../../redux/detailSlice'
import {
  RecipeDetailContainer,
  Aside,
  Diets,
  Dish,
  Steps,
  Header,
  Body,
  Image,
  HealthScore,
  Summary
} from './DetailRecipes.styles'
import Loading from '../Loading/Loading'
import dbImage from '../../static/img/dbImage.png'

export const DetailRecipes = () => {
  const detail = useSelector(selectDetailRecipe)
  const isLoading = useSelector(selectDetailIsLoading)
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <RecipeDetailContainer>
        <Header>
          <h1>{detail.title || detail.name}</h1>
        </Header>
        <Aside>
          <Image src={!detail.image ? dbImage : detail.image } alt={detail.name} />
          <HealthScore>
            <h3>Healt score:</h3>
            <span>{detail.healthScore}</span>
          </HealthScore>
          <Diets>
            <h3>Diet types:</h3>
            {detail.diets?.map((diet, index) => (
              <li key={index}>{diet}</li>
            )) || <li>No diets types</li>}
          </Diets>
          <Dish>
            <h3>Dish types:</h3>
            {detail.dishTypes?.map((dish, index) => (
              <li key={index}>{dish}</li>
            )) || <li>No dish types</li>}
          </Dish>
        </Aside>
        <Body>
          <Summary>{detail.summary}</Summary>
          <Steps>
            <h3>Steps to step:</h3>
            {detail.steps?.map((step, index) => (
              <li key={index}>{step.step || 'No Steps'}</li>
            )) || <li>No steps</li>}
          </Steps>
        </Body>
      </RecipeDetailContainer>
    </>
  )
}
