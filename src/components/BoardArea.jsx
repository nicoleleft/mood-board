import React, { useRef } from 'react';
import { DndContext } from '@dnd-kit/core';
import DraggableImage from './DraggableImage';

function BoardArea({ images, setImages }) {
  const boardRef = useRef(null);

  const handleDragEnd = (event) => {
    const { active, delta } = event;

    setImages(prev =>
      prev.map(img =>
        img.id === active.id
          ? { ...img, x: img.x + delta.x, y: img.y + delta.y }
          : img
      )
    );
  };

  const handleDeleteImage = (idToDelete) => {
    setImages(prev => prev.filter(img => img.id !== idToDelete));
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        ref={boardRef}
        id="board-area"
        className="relative bg-pink-100 h-[600px] rounded-lg border border-pink-300 p-4 m-10 overflow-hidden"
      >
        {images.map((img) => (
          <DraggableImage
            key={img.id}
            id={img.id}
            src={img.src}
            x={img.x}
            y={img.y}
            boundingRef={boardRef}
            onDelete={handleDeleteImage}
          />
        ))}
      </div>
    </DndContext>
  );
}

export default BoardArea;
