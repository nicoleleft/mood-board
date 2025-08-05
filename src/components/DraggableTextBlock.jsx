import { useDraggable } from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import { CSS } from '@dnd-kit/utilities';

function DraggableTextBlock({ id, text, x, y, boundingRef, onDelete }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { type: 'text' },
    modifiers: [restrictToParentElement],
  });

  const style = {
    position: 'absolute',
    top: y,
    left: x,
    transform: CSS.Translate.toString(transform),
    cursor: 'move',
    touchAction: 'none',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="group bg-white rounded-lg p-4 shadow-md max-w-xs break-words"
      {...listeners}
      {...attributes}
    >
      {text || <span className="text-gray-400 italic">[empty]</span>}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
        onPointerDown={(e) => e.stopPropagation()}
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-red-500 text-white text-sm font-bold flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition z-10 pointer-events-auto"
      >
        ×
      </button>
    </div>
  );
}

export default DraggableTextBlock;
