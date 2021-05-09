import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { createUseStyles, useTheme } from 'react-jss';

export const Repository = ({ index }) => {
  const [currentRepo, setCurrentRepo] = useState(null)
  const theme = useTheme()
  const classes = styles({ theme })


  useEffect(() => {
    const repositoryArray = [
      'eslint/eslint',
      'oakwood/front-end-questions',
      'babel/babel',
      'webpack/webpack',
      'storybooks/storybook',
      'facebook/react',
      'reactjs/redux',
      'expressjs/express'
    ];

    fetch(`https://api.github.com/repos/${repositoryArray[index]}`)
      .then(res => res.json())
      .then(data => setCurrentRepo(data))
  }, [index])

  return (
    <article className={classes.card}>
      {currentRepo && !currentRepo.message ?
        (
          <>
            <h1>{currentRepo.full_name}</h1>
            <strong className={classes.strong}>
              <FaStar />
              {currentRepo.stargazers_count}
            </strong>
            <p>{currentRepo.description}</p>
          </>
        ) :
        <h1>Sorry page not found 😱</h1>
      }
    </article>
  )
}


const styles = createUseStyles({
  card: {
    background: ({ theme }) => theme.background,
    borderRadius: ({ theme }) => theme.radii,
    color: 'white',
    fontFamily: ({ theme }) => theme.font,
    padding: '2rem 3rem',
    marginInline: '1rem',
  },
  strong: {
    alignItems: 'center',
    fontWeight: '100',
    fontStyle: 'italic',
    display: 'flex',
  }
})