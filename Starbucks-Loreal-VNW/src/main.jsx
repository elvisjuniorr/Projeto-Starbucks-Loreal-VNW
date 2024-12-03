import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Sobre from './Sobre.jsx'
import Novidades from './Novidades.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/novidades" element={<Novidades />} />
      </Routes>
    </Router>
  </StrictMode>
)
