import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

export const Loader = () => {
  const theme = useTheme()
  const classes = styles({ theme })

  return (
    <div class={classes.wrapper}>
      <h1 className={classes.text}>Loading...</h1>
    </div>
  )
}

const styles = createUseStyles({
  wrapper: {
    background: ({ theme }) => theme.background,
    borderRadius: ({ theme }) => theme.radii,
    marginInline: '1rem',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    minHeight: 500
  },
  text: {
    color: 'white',
    fontFamily: ({ theme }) => theme.font,
    animation: '$pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      opacity: '0',
      textShadow: '2px 2px 0 rgba(0,0,0,0.25)'
    },
    '50%': {
      color: 'hotpink',
      textShadow: '0 2px 2px rgba(0,0,0,0.25)'
    },
    '100%': {
      opacity: '1',
      textShadow: '2px 0 2px rgba(0,0,0,0.25)'
    }
  }
})