import { Draggable } from "@hello-pangea/dnd"

export default function Card({ item, index }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div className="relative w-full md:max-w-xl bg-white flex items-center justify-center py-5 rounded-xl shadow-sm inset-shadow-sm" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <a className="w-full h-full" href={item.link} target="_blank" rel="noopener">
            <span className="w-full h-full flex justify-center">{item.title}</span>
          </a>
        </div>
      )}
    </Draggable>
  )
}
