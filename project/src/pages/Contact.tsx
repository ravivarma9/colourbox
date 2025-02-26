import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50">
      <div className="relative h-[300px] md:h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center rounded-3xl overflow-hidden mt-5 mx-[20px]"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1500)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Contact Us</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <button 
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-green-600 hover:text-green-700"
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-green-600 mr-3" />
                  <span>+91 879 123 1999 | 988 322 2433</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-green-600 mr-3" />
                  <span>info@colourboxhomestay.in</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-green-600 mr-3" />
                  <span>Colourbox homestay Balaknath Rd, near Secret Garden cafe, Tapovan, rishikesh, Uttarakhand, 249192</span>
                </div>
              </div>
            </div>
            

            {/* Contact Form */}
            {/* <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
              >
                Send Message
              </button>
            </form> */}
          </div>

          {/* Map */}
          <div className="h-[250px] md:h-[300px] bg-gray-200 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.703206543996!2d78.3216628!3d30.131305100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091705e8c9312b%3A0xdc30d9a638534731!2sColour%20Box%20Homestay!5e0!3m2!1sen!2sin!4v1740597362626!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;