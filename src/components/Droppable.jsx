import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import KanbanCard from "./Draggable";

const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Potholes",
      date: "August 20",
      location: { name: "Tambaram, Chennai", url: "https://google.com" },
      priority: "High",
      description: "Fix potholes",
    },
    "task-2": {
      id: "task-2",
      title: "Cleaning",
      date: "August 20",
      location: { name: "Avadi", url: "https://example.com" },
      priority: "Medium",
      description: "Clean the streets",
    },
    "task-3": {
      id: "task-3",
      title: "Street Lights",
      date: "August 21",
      location: { name: "Triplicane, Chennai", url: "https://example.com" },
      priority: "Low",
      description: "Install new street lights",
    },
    "task-4": {
      id: "task-4",
      title: "CCTV Camera",
      date: "August 22",
      location: { name: "New Delhi", url: "https://example.com" },
      priority: "High",
      description: "Install new CCTV cameras",
    },
    "task-5": {
      id: "task-5",
      title: "Maintenance",
      date: "August 23",
      location: { name: "Bangalore", url: "https://example.com" },
      priority: "Medium",
      description: "Maintenance work",
    },
    "task-6": {
      id: "task-6",
      title: "New Roads",
      date: "August 21",
      location: { name: "Salem", url: "https://example.com" },
      priority: "Medium",
      description: "Build new roads in the city",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Planned",
      taskIds: ["task-5"],
    },
    "column-2": {
      id: "column-2",
      title: "To Do",
      taskIds: ["task-1", "task-2"],
    },
    "column-3": {
      id: "column-3",
      title: "In Progress",
      taskIds: ["task-3"],
    },
    "column-4": {
      id: "column-4",
      title: "Done",
      taskIds: ["task-4"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};

function BoardComponent() {
  const [data, setData] = useState();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, taskIds: newTaskIds };

      setData((prevState) => ({
        ...prevState,
        columns: {
          ...prevState.columns,
          [newColumn.id]: newColumn,
        },
      }));
    } else {
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);

      const newStart = { ...start, taskIds: startTaskIds };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);

      const newFinish = { ...finish, taskIds: finishTaskIds };

      setData((prevState) => ({
        ...prevState,
        columns: {
          ...prevState.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      }));
    }
  };

  useEffect(() => {
    setData(initialData);
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mt-10 flex w-full gap-2">
        {data &&
          data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

            return (
              <Droppable droppableId={column.id} key={column.id}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="w-[25%]"
                  >
                    <h3 className="mb-3 w-full rounded-full bg-[#bdb6b18f] px-5 py-2 font-semibold text-[#434140]">
                      {column.title}
                    </h3>
                    {tasks.map((task, index) => (
                      <KanbanCard key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })}
      </div>
    </DragDropContext>
  );
}

export default BoardComponent;
