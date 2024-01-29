import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Suren",
    age: 19
  }
  let myArr = [1, 2, 3];
  let username = "AngelaU";

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username={username} />
      <Card username="Jackliene"/>
      
    </>
  )
}

export default App
