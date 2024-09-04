import { useState } from "react";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";
import { Draggable } from "@hello-pangea/dnd";

export const TaskCard = ({
  taskCard,
  setTaskCardsList,
  taskCardsList,
  index,
}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="w-64 p-2 pl-4 pr-4 bg-gray-100 rounded-md shadow-md m-2 mr-1 h-fit"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div
            className="flex justify-between items-center mb-2"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCard={taskCard}
              setTaskCardsList={setTaskCardsList}
              taskCardsList={taskCardsList}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks
            inputText={inputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  );
};
