import { useDispatch } from 'react-redux'
import { closeModal } from '../../redux/modalSlice'
import { ModalContainer, Card, BtnContainer, ButtonError, IconError } from './Modal.styles'
import { BiErrorCircle } from 'react-icons/bi'

export const ModalError = () => {
  const dispatch = useDispatch()

  return (
    <ModalContainer>
      <Card>
        <IconError><BiErrorCircle /></IconError>
        <h4>Enter the valid information and try again!</h4>
        <BtnContainer>
          <ButtonError
            type="button"
            onClick={() => {
              dispatch(closeModal())
            }}>
            confirm
          </ButtonError>
        </BtnContainer>
      </Card>
    </ModalContainer>
  )
}
