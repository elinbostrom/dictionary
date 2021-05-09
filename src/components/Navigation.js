import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { createUseStyles, useTheme } from 'react-jss';
import { Button } from './Button'

export const Navigation = ({ counter, setCounter }) => {
  const increment = () => setCounter(prevState => prevState + 1);
  const decrement = () => setCounter(prevState => prevState - 1);

  const theme = useTheme()
  const classes = styles({ theme })

  return (
    <nav className={classes.navigation}>
      <Button
        fn={decrement}
        background="white"
        color="black"
        hoverBackground="black"
        hoverColor="white"
        borderColor="1px solid black"
      >
        <FaMinus />
        Decrement
        </Button>

      <p className={classes.text}>Counter: {counter}</p>

      <Button
        fn={increment}
        background="hotpink"
        color="white"
        hoverBackground="rebeccapurple"
        hoverColor="white"
      >
        <FaPlus />
        Increment
        </Button>

    </nav>
  )
}


const styles = createUseStyles({
  navigation: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    padding: '1rem 2rem',
    justifyContent: 'center'
  },
  text: {
    fontFamily: ({ theme }) => theme.font,
    fontWeight: '700',
    marginInline: '2rem',
  }
})