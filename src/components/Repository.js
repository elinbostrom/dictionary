import React from 'react'
import { FaStar } from 'react-icons/fa';
import { createUseStyles, useTheme } from 'react-jss';
import { Error } from './Error';

export const Repository = ({ index, currentRepo }) => {
  const theme = useTheme()
  const classes = styles({ theme })

  const renderMarkup = () => {
    if (currentRepo && !currentRepo?.message) {
      return (
        <article className={classes.card}>
          <h1 className={classes.text}>{currentRepo.full_name}</h1>
          <strong className={classes.strong}>
            <FaStar />
            {currentRepo.stargazers_count}
          </strong>
          <p className={classes.text}>{currentRepo.description}</p>
        </article>
      )
    } else {
      return <Error />
    }
  }

  return renderMarkup()
}


const styles = createUseStyles({
  card: {
    background: ({ theme }) => theme.background,
    borderRadius: ({ theme }) => theme.radii,
    color: 'white',
    fontFamily: ({ theme }) => theme.font,
    padding: '2rem 3rem',
    marginInline: '1rem',
    minHeight: 500,
    boxShadow: ({ theme }) => theme.shadow,
  },
  text: {
    animation: '$fadeIn 1s'
  },
  strong: {
    alignItems: 'center',
    fontWeight: '100',
    fontStyle: 'italic',
    display: 'flex',
    animation: '$fadeIn 1s',

    '& svg': {
      color: 'gold',
      marginRight: '0.5rem'
    }
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