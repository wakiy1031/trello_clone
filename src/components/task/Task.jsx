import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Draggable } from "@hello-pangea/dnd";

export const Task = ({ task, index, setTaskList, taskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className="bg-white p-2 rounded-md shadow-md flex justify-between items-center mb-2"
          key={task.id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p className="text-black">{task.title}</p>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDelete(task.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      )}
    </Draggable>
  );
};
