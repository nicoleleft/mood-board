import { useDraggable } from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import { CSS } from '@dnd-kit/utilities';

function DraggableImage({ id, src, x, y, onDelete }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
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
    <div ref={setNodeRef} style={style} className="group">
      <img
        src={src}
        alt="draggable"
        className="w-40 h-40 object-cover rounded shadow-md"
        {...listeners}
        {...attributes}
      />
      <button
        onClick={() => onDelete(id)}
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-red-500 text-white text-sm font-bold flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition z-10"
      >
        ×
      </button>
    </div>
  );
}

export default DraggableImage;
