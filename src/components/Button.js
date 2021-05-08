import React from 'react'

export const Button = ({ fn, text }) => {
  return (
    <button onClick={fn}>
      {text}
    </button>
  )
}
