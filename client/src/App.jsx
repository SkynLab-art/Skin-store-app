import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Phones from './pages/Phones'
import Laptops from './pages/Laptops'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <Link to="/" className="logo">SkynLab Studio</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/phones">Phones</Link></li>
            <li><Link to="/laptops">Laptops</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <button className="nav-cart">🛒 Cart (0)</button>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer className="footer">
          <div className="footer-logo">SkynLab Studio</div>
          <p>© 2026 SkynLab Studio. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Instagram</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App