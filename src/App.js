import { useEffect, useState } from "react";
import { Repository } from "./components/Repository";
import { createUseStyles, ThemeProvider } from "react-jss";
import { theme } from './theme'
import { Navigation } from "./components/Navigation";
import { Loader } from "./components/Loader";

function App() {
  const [counter, setCounter] = useState(0);
  const [currentRepo, setCurrentRepo] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const classes = styles()

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

    fetch(`https://api.github.com/repos/${repositoryArray[counter]}`)
      .then(res => res.json())
      .then(data => setCurrentRepo(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

  return (
    <ThemeProvider theme={theme}>
      <main className={classes.main}>
        <Navigation
          counter={counter}
          setCounter={setCounter}
          setIsLoading={setIsLoading} />
        {isLoading
          ? <Loader />
          : <Repository currentRepo={currentRepo} />}
      </main>
    </ThemeProvider>
  );
}

const styles = createUseStyles({
  main: {
    maxWidth: 700,
    width: '100%',
    margin: 'auto'
  }
})

export default App;
