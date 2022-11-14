import React, { useState } from 'react';
import Button from "./Button";

const App = () => {
  const [counter, setCounter] = useState(0);

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // );

  const increaseByOne = () => {
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    setCounter(counter - 1)
  }

  console.log("rendering...", counter)

  return (
    <div>
      <div> {counter} </div>
      <button onClick={increaseByOne}>increase</button>
      <button onClick={()=> setCounter(0)}>reset</button>
      <Button 
        onClick={decreaseByOne}
        text='decrease'
      />
    </div>
  );
}

export default App