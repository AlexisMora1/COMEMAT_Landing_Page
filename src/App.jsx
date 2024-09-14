import { useState , useEffect } from 'react'
import './assets/App.css'
import { Navbar } from './components/navbar/navbar.jsx'
import { Mandala } from './components/mandala/mandala.jsx'
import {Text} from './components/divtext.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="navbar-layout">
        <Navbar/>
        <h1 className='text-light'>
          Hola, esta es la pagina de la COMEMAT
        </h1>
        <div>
          <Mandala />
        </div>
        <div>
          <Text />
        </div>
      </div>
      {/* <div className="card">
        <button className="btn btn-primary w-25" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
    </>
  )
}

export default App
