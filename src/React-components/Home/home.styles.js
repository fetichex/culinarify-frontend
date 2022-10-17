import styled from 'styled-components'
import mixin from '../../styles/mixins'
import color from '../../styles/variables.styles'

export const GridLayout = styled.section`
  display: grid;
  grid-template-rows: 0fr 1fr 1fr 1fr;
  grid-template-columns: 0.9fr 1fr 1fr 1fr;

  grid-template-areas:
    'header header header header'
    'controls cards cards cards'
    'controls cards cards cards'
    'controls cards cards cards';

  min-height: 100vh;
`

export const AreaHeader = styled.header`
  grid-area: header;
`
export const AreaCards = styled.section`
  grid-area: cards;
  height: 100%;
  ${mixin.flex('column', 'center', 'center')}
`

export const Controls = styled.div`
  width: 100%;
  grid-area: controls;
  background-color: ${color.lightBlue};

  .div_uno {
    margin-top: 50px;
  }
  .p_uno {
    padding-left: 40px;
    font-size: 1.5rem;
    background-color: ${color.lightBlueBlur};
  }
`

export const CardsContainer = styled.div`
  ${mixin.flex('row', 'center', 'space-between')}
  padding-inline: 40px;
`
export const Cards = styled.div`
  ${mixin.grid}
  min-width: 71%;
  height: 100%;
  margin: 8px 0;
`
