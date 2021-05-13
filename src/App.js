import React , {useState}from 'react'
import Button from './Components/Button'
import './App.css'
function App() {
  const [count , setCount] = useState(0)

  const updateCount = sign => {
    let c = count
    if(sign === "+") setCount(c+1)
    else if(sign === "-") setCount(c-1)
    else if (sign === "Reset") setCount(0)
  }
  return (
    <div className = "app">
      <div className = "item1">
        <Button sign = "+" updateCount = {updateCount}/>
        <div className = "count">
          {count}
        </div>
        <Button sign = "-" updateCount = {updateCount}/>
      </div>
      <br/>
      <br/>
      <div className = "item2">
        <Button sign = "Reset" updateCount = {updateCount}/>
      </div>
    </div>
  )
}

export default App
