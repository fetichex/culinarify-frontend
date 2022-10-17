import { css } from 'styled-components'

const grid = css`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 10px;
  height: 100%;
`

const flex = (direction = 'row', align = 'center', justify = 'center') => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`

export default { grid, flex }
