import { useState, useRef } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import BoardArea from './components/BoardArea';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  const [images, setImages] = useState([]);
  const [textBlocks, setTextBlocks] = useState([]);
  const boardRef = useRef(null);

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      const newImage = {
        id: crypto.randomUUID(),
        src: imageURL,
        x: 100,
        y: 100,
      };
      setImages(prev => [...prev, newImage]);
    }
  };

  // ✅ Add text block with user input
  const handleAddTextBlock = () => {
    const userText = prompt('Enter your text:');
    if (!userText || userText.trim() === '') return;

    const newTextBlock = {
      id: crypto.randomUUID(),
      text: userText.trim(),
      x: 50,
      y: 50,
    };

    setTextBlocks((prev) => [...prev, newTextBlock]);
  };

  const handleDownloadBoard = async () => {
    if (!boardRef.current) return;

    // Use html2canvas to capture the board element
    const canvas = await html2canvas(boardRef.current, {
      scale: 2,            // higher scale = better quality
      useCORS: true,       // to load images if from different origin
      backgroundColor: null // transparent bg if you want
    });

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });

    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('moodboard.pdf');
  };

  return (
    <div>
      <h4 className='font-bold p-5'>moodboard-it</h4>
      <Buttons 
        handleAddImage={handleAddImage} 
        handleAddTextBlock={handleAddTextBlock} 
        handleDownloadBoard={handleDownloadBoard} 
      />
      <BoardArea
        ref={boardRef} 
        images={images} 
        setImages={setImages} 
        textBlocks={textBlocks} 
        setTextBlocks={setTextBlocks} 
      />
    </div>
  );
}

export default App;
