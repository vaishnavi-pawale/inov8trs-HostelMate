const rooms = [
    { id: 1, number: 101, type: "AC", floor: 1, available: true },
    { id: 2, number: 102, type: "Non-AC", floor: 1, available: false },
  ];
  
  export default function Rooms() {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Available Rooms</h1>
        {rooms.map((room) => (
          <div key={room.id} className="border p-4 rounded mt-2">
            <p>Room: {room.number} | Type: {room.type} | Floor: {room.floor}</p>
            {room.available ? (
              <button className="bg-green-500 text-white p-2 rounded">Apply</button>
            ) : (
              <span className="text-red-500">Full</span>
            )}
          </div>
        ))}
      </div>
    );
  }
  