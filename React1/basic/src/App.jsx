import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter == 20) {
      
    }else{
      setCounter(counter + 1);
    }
    
  }

  const removeValue = () => {
    if(counter == 0){
    }else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>hiee</h1>
      <h2>Counter Value: {counter}</h2> {/* Use state variable `counter` */}
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
