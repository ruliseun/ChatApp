import React from 'react'
import { ButtonStyle } from '../styles/ButtonStyle'

const Button = ({name, clickAction}) => {
  return (
    <ButtonStyle>
        <button onClick={clickAction}>{name}</button>
    </ButtonStyle>
  )
}

export default Button