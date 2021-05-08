import React, { useEffect, useState } from 'react'

export const Repository = ({ index }) => {
  const [currentRepo, setCurrentRepo] = useState(null)

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
    <article>
      {currentRepo && !currentRepo.message ?
        (
          <>
            <h1>{currentRepo.full_name}</h1>
            <strong>{currentRepo.stargazers_count}</strong>
            <p>{currentRepo.description}</p>
          </>
        ) :
        <h1>Sorry page not found 😱</h1>
      }
    </article>
  )
}
