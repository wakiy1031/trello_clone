import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";

export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const deleteTaskCard = useCallback(() => {
    const newTaskCardsList = taskCardsList.filter((e) => e.id !== taskCard.id);
    setTaskCardsList(newTaskCardsList);
  }, [taskCardsList, setTaskCardsList, taskCard.id]);

  return (
    <div className="w-10 p-2 pl-4 pr-4 bg-gray-100 rounded-full drop-shadow-lg m-2 mr-1 h-10 border-2 border-gray-300 transition duration-200 ease-in-out hover:shadow-inner hover:bg-gray-200">
      <button
        className="w-full h-full flex justify-center items-center rounded-md cursor-pointer"
        onClick={deleteTaskCard}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
