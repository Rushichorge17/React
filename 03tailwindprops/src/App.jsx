// import { useState } from 'react'
import Card from './component/Card'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let myObj={
    uersName: 'Rushikesh',
    age:21

  }

  return (
    <>
     <h1 className="bg-green-400 text-black rounded-xl"> Tailwind test</h1>
     <Card username="Rushi Chorge" btnText="Visite me"/>
    </>
  )
}

export default App
