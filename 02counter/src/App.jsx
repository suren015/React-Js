import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // [value, function] = useState(default value)
  let [counter, setCounter] = useState(15)
  
  const addValue = () => {
    if(counter<=19) counter += 1;
    setCounter(counter);
    console.log('Clicked: ', counter);
  }
  const removeValue = () => {
    if(counter>0) counter -= 1;
    setCounter(counter);
    console.log('Clicked: ', counter);
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value { counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value { counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
