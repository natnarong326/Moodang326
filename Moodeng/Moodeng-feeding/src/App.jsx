import { useState } from "react";

const person = {
  name: 'Food NongMooDeng',
  theme: {
    backgroundColor: 'Blue',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',  
    height: '100vh'  
  }
};

export default function TodoList() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100); 
  const [image, setImage] = useState("https://tse2.mm.bing.net/th?id=OIF.wb5240go%2bwAAmaYmt0XWag&pid=Api&P=0&h=180"); 

  const feed = (foodLevel) => {
    const newLevel = level + foodLevel;

    if (newLevel > 100) {
      setImage("Natnarong.jpg"); 
    }

    setLevel(newLevel);
    setSize(100 + newLevel); 
  };

  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
      <img
        className="avatar"
        src={image}
        alt="Natnarong.jpg"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          maxWidth: '90vw',  
          maxHeight: '90vh', 
          objectFit: 'cover', 
        }}
      />

      <h2>Feed the Mudang</h2>
      {/* Container for horizontal buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => feed(5)}
          style={{ backgroundColor: 'lightgreen', color: 'black' }}
        >
          แตงโม (+5)
        </button>
        <button 
          onClick={() => feed(10)}
          style={{ backgroundColor: 'yellow', color: 'black' }}
        >
          ฟักทอง (+10)
        </button>
        <button 
          onClick={() => feed(20)}
          style={{ backgroundColor: 'green', color: 'black' }}
        >
          ผักบุ้ง (+20)
        </button>
      </div>

      <p>Current Level: {level}</p>
    </div>
  );
}















