import { useState } from "react";
import { Button } from "./components/Button";
import { Repository } from "./components/Repository";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(prevState => prevState + 1);
  const decrement = () => setCounter(prevState => prevState - 1);

  return (
    <div>
      <Button fn={decrement} text="Decrement" />
      <p>Counter: {counter}</p>
      <Button fn={increment} text="Increment" />
      <Repository index={counter} />
    </div>
  );
}

export default App;
