import { useRef } from 'react';

function Buttons({ handleAddImage, handleAddText, handleDownloadBoard  }) {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click(); // open the hidden file input
  };

  return (
    <>
        <div id='buttons' className='flex flex-row justify-evenly items-center m-4'>
            <button 
          className='bg-pink-300 text-white p-2 rounded'
          onClick={handleClick}
        >
          Add Image
        </button>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleAddImage}
        />
            <button className='bg-pink-300 text-white p-2 rounded' onClick={handleAddText} >Add Text</button>
            <button className='bg-pink-300 text-white p-2 rounded' onClick={handleDownloadBoard}>Download Board</button>
        </div>
    </>
  )
}

export default Buttons