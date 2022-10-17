import {
  Title,
  Container,
  LinkContainer,
  GoToHome,
  ImgContainer,
  Img,
  Main,
  Text
} from './landing.styles'
import imgLanding from '../../static/img/imgLanding.png'

export const Landing = () => {
  return (
    <>
      <Container>
        <ImgContainer>
          <Img src={imgLanding} alt="landing" />
        </ImgContainer>
        <Main>
          <Title>Culinarify</Title>
          <LinkContainer whileHover={{ scale: 1.1 }}>
            <GoToHome to="/home">
              <Text>explore recipes</Text>
            </GoToHome>
          </LinkContainer>
        </Main>
      </Container>
    </>
  )
}
