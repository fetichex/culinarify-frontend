import {
  Section,
  Logo,
  LinkContainer,
  BtnCreate,
  Text
} from './Header.styles'
import { SearchBar } from '../SearchBar/SearchBar'

export const Header = () => {
  return (
    <Section>
        <Logo>
          <h1>API Food</h1>
        </Logo>
      <SearchBar />
      <LinkContainer whileHover={{ scale: 1.1 }}>
        <BtnCreate to={'/create'}>
          <Text>Create Recipe</Text>
        </BtnCreate>
      </LinkContainer>
    </Section>
  )
}
