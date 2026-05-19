import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-col gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="px-3 py-1 rounded-full" style={{backgroundColor: "olive", color: "white"}} onClick={() => setColor("olive")}>Olive</button>
            <button className="px-3 py-1 rounded-full" style={{backgroundColor: "teal", color: "white"}} onClick={() => setColor("teal")}>Teal</button>
            <button className="px-3 py-1 rounded-full" style={{backgroundColor: "maroon", color: "white"}} onClick={() => setColor("maroon")}>Maroon</button>
            <button className="px-3 py-1 rounded-full" style={{backgroundColor: "navy", color: "white"}} onClick={() => setColor("navy")}>Navy</button>
            <button className="px-3 py-1 rounded-full" style={{backgroundColor: "purple", color: "white"}} onClick={() => setColor("purple")}>Purple</button>
            <button className="px-3 py-1 rounded-full" style={{backgroundColor: "gray", color: "white"}} onClick={() => setColor("gray")}>Gray</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
