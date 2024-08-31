import React from "react";
import { useNavigate } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
import BadgeGen from "./BadgeGen";
import { IoLocationSharp } from "react-icons/io5";

export default function KanbanCard({ task, index }) {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);

  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <div
          onClick={() => setShow(!show)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="mb-1 w-full flex-col gap-3 rounded-3xl border border-[#CCC7C0] bg-[#DFD9D1] p-4 px-6 pr-4"
          style={{
            ...provided.draggableProps.style,
          }}
        >
          <div className="flex items-start justify-between">
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-xl font-semibold">{task.title}</h1>
              <p className="text-xs opacity-50">{task.date}</p>
            </div>
            <BadgeGen type={task.priority.toLowerCase()} />
          </div>
          {show && (
            <p className="mt-3 border-l-2 border-[#595754] pl-3 text-sm font-medium text-[#595754]">
              {task.description}
            </p>
          )}
          <div
            onClick={() => navigate(task.location.url)}
            className="mt-4 flex items-center gap-1 text-xs font-medium"
          >
            <IoLocationSharp /> {task.location.name}
          </div>
        </div>
      )}
    </Draggable>
  );
}
