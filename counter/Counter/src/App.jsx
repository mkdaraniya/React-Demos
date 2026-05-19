import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
      setCount(prevCount => prevCount + 1);
      setCount(prevCount => prevCount + 1);
  };

  const subtractValue = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {count}</h2>
      
      <button
      onClick={addValue}
      >Add Value</button>
      <button
      onClick={subtractValue}
      >Subtract Value</button>
    </>
  )
}

export default App
