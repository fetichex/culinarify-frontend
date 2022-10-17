import {
  Container,
  Name,
  Diets,
  DietsContainer,
  Image,
  ImageDb,
  Header,
  Info
} from './Card.styles'
import dbImg from '../../static/img/dbImage.png'

export const Card = ({ id, image, name, diets }) => {
  return (
    <>
      <Container to={`/recipe/${id}`}>
        <Header>
          {image ? (
            <Image src={image} alt={name} />
          ) : (
            <ImageDb src={dbImg} alt={name} />
          )}
        </Header>
        <Info
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 0.8,
            transition: {
              duration: 0.2,
              ease: 'easeInOut'
            }
          }}>
          <Name>{name}</Name>
          <DietsContainer>
            <h3>Diets: </h3>
            <div>
              {diets.map((diet, i) => (
                <Diets key={i}>{diet}</Diets>
              ))}
            </div>
          </DietsContainer>
        </Info>
      </Container>
    </>
  )
}
