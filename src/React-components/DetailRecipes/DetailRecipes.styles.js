import styled from 'styled-components'
import mixin from '../../styles/mixins'
import color from '../../styles/variables.styles'

export const RecipeDetailContainer = styled.article`
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
`

export const Header = styled.header`
  background-color: ${color.blue};
  color: ${color.white};
  padding: 0 20px;
  grid-column: 1 / 4;
  border-radius: 10px;

  h1 {
    padding-left: 20px;
    margin-top: 20px;
    font-size: 5rem;
  }
`

export const Body = styled.section`
  color: black;
  grid-column: span 2;
  gap: 20px;
  ${mixin.flex('column', 'center', 'space-between')}

  h3 {
    font-size: 1.5rem;
  }
`

export const Summary = styled.div`
  width: 100%;
  height: 50%;
  padding: 20px;
  background-color: ${color.lightBlue};
  border-radius: 10px;
  overflow-y: scroll;
  `

export const Steps = styled.div`
  width: 100%;
  height: 50%;
  padding: 20px;
  padding-left: 40px;
  background-color: ${color.lightGreen};
  border-radius: 10px;
  overflow-y: scroll;

  h3 {
    margin-top: 0;
    font-size: 1.5rem;
  }
  li {
    margin-bottom: 15px;
  }
`

export const Aside = styled.aside`
  background-color: ${color.lightBlue};
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  row-gap: 20px;
  overflow: hidden;
  border-radius: 10px;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`

export const HealthScore = styled.div`
  ${mixin.flex('row', 'center', 'flex-start')}
  width: 90%;
  padding: 20px;
  gap: 20px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
  }
`

export const Diets = styled.div`
  width: 90%;
  padding: 20px;
  h3 {
    margin-top: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
  }
`

export const Dish = styled.div`
  width: 90%;
  padding: 20px;
  h3 {
    margin-top: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
  }
`
