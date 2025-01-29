import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <button 
        onClick={() => navigate('/')}
        className="mb-8 flex items-center text-green-600 hover:text-green-700"
      >
        <ArrowLeft className="mr-2" /> Back to Home
      </button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h1>
        <p className="text-green-900 mb-4">
          Get in touch with us for bookings and inquiries...
        </p>
      </div>
    </div>
  );
}

export default Contact;