import { Task } from "./Task";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = reorder(
      taskList,
      result.source.index,
      result.destination.index
    );

    setTaskList(reordered);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <Task
                  key={task.id}
                  task={task}
                  index={index}
                  setTaskList={setTaskList}
                  taskList={taskList}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
