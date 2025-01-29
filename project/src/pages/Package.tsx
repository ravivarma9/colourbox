import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Package() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-50 p-8">
      <button 
        onClick={() => navigate('/')}
        className="mb-8 flex items-center text-purple-600 hover:text-purple-700"
      >
        <ArrowLeft className="mr-2" /> Back to Home
      </button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 mb-6">Our Packages</h1>
        <p className="text-purple-900 mb-4">
          Browse our specially curated stay packages...
        </p>
      </div>
    </div>
  );
}

export default Package;