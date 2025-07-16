import { useNavigate } from 'react-router-dom';

const RoomCard = ({ id, title, image, description }: { id: string; title: string; image: string; description: string }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/rooms#${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={handleClick}
          className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
