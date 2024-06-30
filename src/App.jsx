import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import NavBar from './components/Layout/NavBar/NavBar'
import NoPage from './pages/NoPage'
import Footer from './components/Layout/Footer/Footer'

function App() {
  return (
    <Router>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer/>
    </Router>
  )
}

export default App
