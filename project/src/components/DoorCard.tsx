import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DoorCardProps {
  title: string;
  bgColor: string;
  path: string;
  imageUrl: string;
}

const DoorCard: React.FC<DoorCardProps> = ({ title, bgColor, path, imageUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${bgColor}`}
      onClick={() => navigate(path)}
    >
      <div 
        className="w-full h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity hover:bg-opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center p-2">
        </div>
      </div>
    </div>
  );
}

export default DoorCard;