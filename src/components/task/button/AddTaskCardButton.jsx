import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const id = uuid();
  const addTaskCard = () => {
    setTaskCardsList([...taskCardsList, { id, draggableId: `item-${id}` }]);
  };
  return (
    <div className="w-10 p-2 pl-4 pr-4 bg-gray-100 rounded-full drop-shadow-lg m-2 mr-1 h-10 border-2 border-gray-300 transition duration-200 ease-in-out hover:shadow-inner hover:bg-gray-200">
      <button
        className="w-full h-full flex justify-center items-center rounded-md cursor-pointer"
        onClick={addTaskCard}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};
