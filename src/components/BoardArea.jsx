import React, { forwardRef, useRef } from 'react';
import { DndContext } from '@dnd-kit/core';
import DraggableImage from './DraggableImage';
import DraggableTextBlock from './DraggableTextBlock';

const BoardArea = forwardRef(({ images, setImages, textBlocks, setTextBlocks }, ref) => {
  const boardRef = ref || useRef(null);

  const handleDragEnd = (event) => {
    const { active, delta } = event;

    // Handle image drag
    if (active.data.current?.type === 'image') {
      setImages((prevImages) =>
        prevImages.map((img) =>
          img.id === active.id
            ? {
                ...img,
                x: img.x + delta.x,
                y: img.y + delta.y,
              }
            : img
        )
      );
    }

    // Handle text block drag
    if (active.data.current?.type === 'text') {
      setTextBlocks((prevTextBlocks) =>
        prevTextBlocks.map((block) =>
          block.id === active.id
            ? {
                ...block,
                x: block.x + delta.x,
                y: block.y + delta.y,
              }
            : block
        )
      );
    }
  };

  const handleDeleteImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleDeleteText = (id) => {
    setTextBlocks((prev) => prev.filter((block) => block.id !== id));
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        ref={boardRef}
        id="board-area"
        className="relative bg-white h-[600px] rounded-lg border border-pink-300 p-4 m-10 overflow-hidden"
      >
        {images.map((img) => (
          <DraggableImage
            key={img.id}
            id={img.id}
            src={img.src}
            x={img.x}
            y={img.y}
            boundingRef={boardRef}
            onDelete={() => handleDeleteImage(img.id)}
          />
        ))}

        {textBlocks.map((block) => (
          <DraggableTextBlock
            key={block.id}
            id={block.id}
            text={block.text}
            x={block.x}
            y={block.y}
            boundingRef={boardRef}
            onDelete={() => handleDeleteText(block.id)}
          />
        ))}
      </div>
    </DndContext>
  );
});

export default BoardArea;
