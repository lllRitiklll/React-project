import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-13 inset-x-0 px-3'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
            onClick={()=> setColor("red")}
            className='px-4 outline-none rounded-full text-white shadow-lg 'style={{backgroundColor:"red"}}
            >Red</button>
            <button
            onClick={()=> setColor("Green")}

            className='px-4 outline-none rounded-full text-white shadow-lg 'style={{backgroundColor:"Green"}}
            >Green</button>
            <button
            onClick={()=> setColor("Pink")}

            className='px-4 outline-none rounded-full text-white shadow-lg 'style={{backgroundColor:"Pink"}}
            >Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
