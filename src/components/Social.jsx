import { Draggable } from "@hello-pangea/dnd"
import Icon from "./Icon"

export default function Social({ item, index }) {
  const formattedLink = item.link.startsWith("https://") ? item.link : `https://${item.link}`

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Icon name={item.type} url={formattedLink} className="h-8 fill-white" />
        </div>
      )}
    </Draggable>
  )
}
