import { useParams } from 'react-router-dom';
import { rooms } from '../data/rooms'; // import the rooms data
import ImageSlider from '../components/ImageSlider';

function RoomDetail() {
  const { roomId } = useParams();
  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return <div className="p-10 text-red-500">Room not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{room.name}</h1>
      <ImageSlider images={[{ url: room.imageUrl, title: room.name }]} />
      <p className="mt-6 text-lg text-gray-700">{room.description}</p>
      <ul className="list-disc list-inside text-gray-700 mt-4">
        {room.amenities.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
      <p className="mt-6 text-xl font-bold">${room.price}/night</p>
    </div>
  );
}

export default RoomDetail;