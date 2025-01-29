import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-yellow-50 p-8">
      <button 
        onClick={() => navigate('/')}
        className="mb-8 flex items-center text-yellow-600 hover:text-yellow-700"
      >
        <ArrowLeft className="mr-2" /> Back to Home
      </button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-800 mb-6">About Us</h1>
        <p className="text-yellow-900 mb-4">
          Welcome to Colourbox Home Stay, your perfect getaway destination...
        </p>
      </div>
    </div>
  );
}

export default About;