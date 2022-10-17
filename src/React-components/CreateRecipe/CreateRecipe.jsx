/* eslint-disable */
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getDiets, createRecipe } from '../../redux/utils/thunk'
import { selectDiets } from '../../redux/dietsSlice'
import { selectRejected } from '../../redux/recipesSlice'
import { openModal } from '../../redux/modalSlice'
import { Modal } from '../Modal/Modal'
import { ModalError } from '../Modal/ModalError'

import {
  Label,
  Inputs,
  DivHealth,
  DivTitle,
  LabelHealth,
  Health,
  Title,
  TextArea,
  Form,
  CheckBox,
  Texts,
  CheckBoxes,
  Message,
  MessageContainer,
  Text,
  Buttons,
  Button,
  LinkContainer,
  BtnCancel,
  IconWarning
} from './CreateRecipe.styles'

export const CreateRecipe = () => {
  const dispatch = useDispatch()
  const diets = useSelector((state) => selectDiets(state))
  const rejected = useSelector((state) => selectRejected(state))
  const isOpen = useSelector((state) => state.modal.isOpen)
  const [selected, setSelected] = useState([])
  const [validateTitle, setValidateTitle] = useState('hidden')
  const [validateSummary, setValidateSummary] = useState('hidden')
  const [validateHealth, setValidateHealth] = useState('hidden')

  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch])

  const regexValidate = (e) => {
    switch (e.target.name) {
      case 'title':
        e.target.value.match(/^[a-zA-ZÀ-ÿ\s]{3,80}$/)
          ? setValidateTitle('hidden')
          : setValidateTitle('')
        break
      case 'summary':
        e.target.value.match(/^[a.0-z-A-Z/,À-ÿ!'\s]{10,255}$/)
          ? setValidateSummary('hidden')
          : setValidateSummary('')
        break
      case 'health':
        e.target.value.match(/^\b([0-9]|[1-9][0-9]|100)\b$/gm)
          ? setValidateHealth('hidden')
          : setValidateHealth('')
        break
    }
  }

  const CheckOnChange = (id) => {
    const find = selected.indexOf(id)

    if (find > -1) {
      selected.splice(find, 1)
    } else {
      selected.push(id)
    }
    setSelected([...selected])
  }

  const getValues = (e) => {
    const values = {
      name: e.target.title.value,
      summary: e.target.summary.value,
      healthScore: e.target.health.value,
      steps: e.target.steps.value,
      diets: selected
    }
    return values
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createRecipe(getValues(e)))
    dispatch(openModal())
  }

  return (
    <>
      {isOpen && !rejected ? (
        <Modal />
      ) : isOpen && rejected ? (
        <ModalError />
      ) : null}
      <Form
        onSubmit={(e) => {
          handleSubmit(e)
        }}>
        <Texts>
          <Inputs>
            <DivTitle>
              <Label htmlFor="title">title</Label>
              <Title
                onChange={regexValidate}
                onBlur={regexValidate}
                type="text"
                id="title"
                name="title"
                error={validateTitle}
                required
              />
            </DivTitle>
            <DivHealth>
              <LabelHealth htmlFor="health">
                health
                <br />
                score
              </LabelHealth>
              <Health
                type="number"
                id="health"
                name="health"
                onChange={regexValidate}
                onBlur={regexValidate}
                error={validateHealth}
                min={0}
                max={100}
                placeholder="0-100"
                required
              />
            </DivHealth>
          </Inputs>
          <MessageContainer display={validateHealth}>
            <IconWarning />
            <Message>Only numbers between 0 and 100</Message>
          </MessageContainer>
          <MessageContainer display={validateTitle}>
            <IconWarning />
            <Message>Only letters and spaces, min 3, max 255</Message>
          </MessageContainer>
          <Label htmlFor="summary">summary</Label>
          <TextArea
            id="summary"
            name="summary"
            onChange={regexValidate}
            onBlur={regexValidate}
            error={validateSummary}
            required
          />
          <MessageContainer display={validateSummary}>
            <IconWarning />
            <Message>Summary is a required field - min 10 charts</Message>
          </MessageContainer>
          <Label htmlFor="steps">step to step</Label>
          <TextArea error={'hidden'} id="steps" name="steps" />
        </Texts>
        <div>
          <Label htmlFor="diets">diets</Label>
          <CheckBoxes>
            {diets.map((diet) => (
              <Label key={diet.id} htmlFor={diet.id}>
                <CheckBox
                  onChange={() => CheckOnChange(diet.id)}
                  selected={selected.includes(diet.id)}
                  key={diet.id}
                  type="checkbox"
                  id={diet.id}
                />
                {diet.name}
              </Label>
            ))}
          </CheckBoxes>
        </div>
        <Buttons>
          <Button whileHover={{ scale: 1.1 }} type="submit">
            Create
          </Button>
          <LinkContainer
            initial={{ backgroundColor: 'transparent' }}
            whileHover={{ backgroundColor: 'tomato' }}>
            <BtnCancel to={'/home'}>
              <Text>CANCEL</Text>
            </BtnCancel>
          </LinkContainer>
        </Buttons>
      </Form>
    </>
  )
}
/* eslint-enable */
