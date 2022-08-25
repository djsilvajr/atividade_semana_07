import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <img className="App-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8axo2TU9Oj4uG8D9QwjgsIz7bbMFxBLJ3Q&usqp=CAU" alt="Icone" />
        <h1  className="App-tittle"><i>Rest.</i></h1>
        <div className='App-itens'>
          <a href=""><i>Cardápio</i></a>
        </div>
        
    </div>
  )
}

export default App
