import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { Amenities } from './pages/Amenities';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p>123 Seaside Avenue</p>
                <p>Beach City, BC 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@seasidehaven.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/rooms" className="hover:text-blue-400">Rooms</a></li>
                  <li><a href="/amenities" className="hover:text-blue-400">Amenities</a></li>
                  <li><a href="/gallery" className="hover:text-blue-400">Gallery</a></li>
                  <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                <p className="mb-4">Subscribe to our newsletter for special offers</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
                  />
                  <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;