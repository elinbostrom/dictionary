import React from 'react'
import { createUseStyles } from 'react-jss'

export const Button = ({ children, fn, ...props }) => {
  const classes = styles({ ...props })

  return (
    <button className={classes.button} onClick={fn}>
      {children}
    </button>
  )
}


const styles = createUseStyles({
  button: {
    alignItems: 'center',
    background: props => props.background,
    borderRadius: 25,
    border: props => props.borderColor,
    boxSizing: 'border-box',
    color: props => props.color,
    cursor: 'pointer',
    display: 'grid',
    gridTemplateColumns: '30px auto',
    minWidth: 170,
    padding: '1rem 2rem',
    textTransform: 'uppercase',

    '&:hover': {
      background: props => props.hoverBackground,
      color: props => props.hoverColor,
    }
  }
})

Button.defaultProps = {
  background: 'skyblue',
  color: 'darkgray',
  hoverBackground: 'darkgray',
  hoverColor: 'skyblue',
  borderColor: 'none'
}