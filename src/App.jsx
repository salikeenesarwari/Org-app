import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import InstallButton from './components/InstallButton';
import Home from './pages/Home';
import Books from './pages/Books';
import Events from './pages/Events';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
        <InstallButton />
      </div>
    </Router>
  );
}

export default App;
