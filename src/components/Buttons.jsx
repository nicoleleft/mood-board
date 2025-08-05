import { useRef } from "react";

function Buttons({ handleAddImage, handleAddTextBlock, handleDownloadBoard }) {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click(); // open the hidden file input
  };

  return (
    <>
      <div
        id="buttons"
        className="flex flex-row justify-evenly items-center m-4"
      >
        <button
          className="flex items-center gap-2 px-6 py-2 rounded-lg text-gray-800 bg-pink-300 border border-purple-200 shadow-[6px_6px_0_0_#f4c2d7] hover:shadow-[4px_4px_0_0_#f4c2d7] transition duration-200"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add Image
        </button>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleAddImage}
        />
        <button
          className="flex items-center gap-2 px-6 py-2 rounded-lg text-gray-800 bg-pink-300 border border-purple-200 shadow-[6px_6px_0_0_#f4c2d7] hover:shadow-[4px_4px_0_0_#f4c2d7] transition duration-200"
          onClick={handleAddTextBlock}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 6.75h15M12 6.75v10.5m-7.5 0h15"
            />
          </svg>
          Add Text
        </button>

        <button
          className="flex items-center gap-2 px-6 py-2 rounded-lg text-gray-800 bg-pink-300 border border-purple-200 shadow-[6px_6px_0_0_#f4c2d7] hover:shadow-[4px_4px_0_0_#f4c2d7] transition duration-200"
          onClick={handleDownloadBoard}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v9m0 0l-3-3m3 3l3-3m-9 6h12"
            />
          </svg>
          Download Board
        </button>
      </div>
    </>
  );
}

export default Buttons;
