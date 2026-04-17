import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ScrollToTop from './ScrollToTop';

function Navbar() {
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">aramos468</Link>
      <div className="nav-links">
        <button onClick={() => goToSection('about')} className="nav-btn">About</button>
        <button onClick={() => goToSection('projects')} className="nav-btn">Projects</button>
        <button onClick={() => goToSection('contact')} className="nav-btn">Contact</button>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;