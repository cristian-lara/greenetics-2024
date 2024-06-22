import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DOMPurify from 'dompurify';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Greenetics');
  const [output, setOutput] = useState('')

  const enviarAGuardar = ()=>{
    const sanitizar = DOMPurify.sanitize(name)
    setOutput(sanitizar);
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h3>{name}</h3>
      <img src="data:image/png;base64,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" alt="" />
      <button onClick={()=> setName('')}>Reset</button>
      <label htmlFor="">Nombre: </label>
      <input type="text" value={name} onChange={(event)=> setName(event.target.value)} />
      <button onClick={enviarAGuardar}>Enviar</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>Se esta enviando al backend esto</h1>
      <div dangerouslySetInnerHTML={{__html: output}}></div>
    </>
  )
}

export default App
