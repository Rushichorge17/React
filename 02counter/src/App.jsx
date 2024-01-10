import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter,setCounter] =useState(1)


  //let counter=15

  const addvalue=()=>{
    if(counter!=20){
    counter+=1;
    console.log("Clicked", counter );
   setCounter(counter);
    }
  //   console.log("Clicked", counter );
  //  setCounter(counter);
  }


  const removeValue=()=>{
    if(counter!=0){
    counter-=1 
    setCounter(counter);
    }
    //setCounter(counter);
  }

  return (
    <>
     <h1> React with Rushi</h1>
     <h2> Counter Value :{counter}</h2>
     <button
      onClick={addvalue}
      >Add value:{counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value:{counter}</button>
     <p> Footer:{counter}</p>
    </>
  )
}

export default App
