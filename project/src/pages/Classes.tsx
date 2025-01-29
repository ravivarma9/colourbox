import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Classes() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-red-50 p-8">
      <button 
        onClick={() => navigate('/')}
        className="mb-8 flex items-center text-red-600 hover:text-red-700"
      >
        <ArrowLeft className="mr-2" /> Back to Home
      </button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-800 mb-6">Our Classes</h1>
        <p className="text-red-900 mb-4">
          Explore our range of exciting classes and activities...
        </p>
      </div>
    </div>
  );
}

export default Classes;