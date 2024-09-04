import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (e) => {
    const id = uuid();
    e.preventDefault();
    if (inputText === "") return;
    setTaskList([
      ...taskList,
      {
        id,
        title: inputText,
        isDone: false,
        draggableId: `item-${taskList.length}`,
      },
    ]);
    setInputText("");
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          placeholder="Add a card"
          className="w-full p-1 rounded-md outline-none mb-2"
          value={inputText}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
