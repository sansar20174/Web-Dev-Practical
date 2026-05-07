import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const Increament =  () => {setCount(count + 1)}
  const Decreament = () => {setCount(count - 1)}
  const Reset = () => {setCount(0)}
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={Increament}>Increament</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decreament}>Decreament</button>
    </div>
  )
}
export default App
