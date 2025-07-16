import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Classes from './pages/Classes';
import Package from './pages/Package';
import RoomDetail from './pages/RoomDetail';
import Attraction from './pages/Attraction';
import Contact from './pages/Contact';
import Footer from './components/Footer';

// Wrapper component to conditionally render Navbar and Footer
const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {!isHome && <Navbar />}
      <div className={`flex-grow ${!isHome && 'pt-16'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:roomId" element={<RoomDetail />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/package" element={<Package />} />
          <Route path="/attraction" element={<Attraction />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {<Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;