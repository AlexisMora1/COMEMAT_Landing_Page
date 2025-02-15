import './assets/App.css'
import NavBar from './components/navbar/navbar.jsx'
import { Mandala } from './components/mandala/mandala.jsx'
import {Text} from './components/divtext.jsx'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import News from './pages/News.jsx'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/news" element={<News></News>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App
