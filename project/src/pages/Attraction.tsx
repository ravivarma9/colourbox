import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Attraction() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <button 
        onClick={() => navigate('/')}
        className="mb-8 flex items-center text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft className="mr-2" /> Back to Home
      </button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Local Attractions</h1>
        <p className="text-blue-900 mb-4">
          Discover amazing attractions near our location...
        </p>
      </div>
    </div>
  );
}

export default Attraction;