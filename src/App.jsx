import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './components/Buttons'
import BoardArea from './components/BoardArea'

function App() {
  const [images, setImages] = useState([]); // store uploaded images

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      const newImage = {
        id: crypto.randomUUID(), // unique id
        src: imageURL,
        x: 100, // initial position
        y: 100
      };
      setImages(prev => [...prev, newImage]);
    }
  };

  return (
    <>
      <div>
        <h4 className='font-bold'>moodboard.it</h4>
        <Buttons handleAddImage={handleAddImage} />
        <BoardArea images={images} setImages={setImages} />
      </div>
    </>
  )
}

export default App
