import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Phone } from 'lucide-react';

function Footer() {
  const openWhatsApp = () => {
    window.open('https://wa.me/+918791231999', '_blank');
  };

  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <p>Connect with us:</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.facebook.com/people/Colour-Box-Homestay/61578632048431/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/colourbox_rishikesh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://twitter.com/colourboxstay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://www.youtube.com/@ColourBox_Rishikesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 transition-colors"
            >
              <Youtube size={24} />
            </a>
            <button 
              onClick={openWhatsApp}
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              <Phone size={24} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;