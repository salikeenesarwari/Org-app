import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import InstallButton from './components/InstallButton';
import UpdateNotification from './components/UpdateNotification';
import Home from './pages/Home';
import SijraMunajat from './pages/SijraMunajat';
import Books from './pages/Books';
import ImportantDaleels from './pages/ImportantDaleels';
import Events from './pages/Events';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sijra-munajat" element={<SijraMunajat />} />
          <Route path="/books" element={<Books />} />
          <Route path="/important-daleels" element={<ImportantDaleels />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
        <InstallButton />
        <UpdateNotification />
      </div>
    </Router>
  );
}

export default App;
