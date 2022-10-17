import { useDispatch } from 'react-redux'
import { closeModal } from '../../redux/modalSlice'
import {
  ModalContainer,
  Card,
  BtnContainer,
  ButtonSuccess,
  IconSuccess
} from './Modal.styles'
import { BiCheckCircle } from 'react-icons/bi'

export const Modal = () => {
  const dispatch = useDispatch()

  return (
    <ModalContainer>
      <Card>
        <IconSuccess>
          <BiCheckCircle />
        </IconSuccess>
        <h4>Recipe has been created.</h4>
        <BtnContainer>
          <ButtonSuccess
            type="button"
            onClick={() => {
              dispatch(closeModal())
            }}>
            confirm
          </ButtonSuccess>
        </BtnContainer>
      </Card>
    </ModalContainer>
  )
}
