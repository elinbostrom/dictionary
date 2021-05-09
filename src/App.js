import { useState } from "react";
import { Repository } from "./components/Repository";
import { createUseStyles, ThemeProvider } from "react-jss";
import { theme } from './theme'
import { Navigation } from "./components/Navigation";

function App() {
  const [counter, setCounter] = useState(0);
  const classes = styles()

  return (
    <ThemeProvider theme={theme}>
      <main className={classes.main}>
        <Navigation counter={counter} setCounter={setCounter} />
        <Repository index={counter} />
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
