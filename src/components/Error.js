import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

export const Error = () => {
  const theme = useTheme()
  const classes = styles({ theme });

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.text}>Sorry page not found 😱</h1>
    </div>
  )
}

const styles = createUseStyles({
  wrapper: {
    background: ({ theme }) => theme.background,
    borderRadius: ({ theme }) => theme.radii,
    marginInline: '1rem',
    padding: '2rem 3rem',
    animation: '$fadeIn 600ms'
  },
  text: {
    fontFamily: ({ theme }) => theme.font,
    color: 'white'
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: '0',
    },
    '100%': {
      opacity: '1',
    }
  }
})