import { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = (e) => {
    e.stopPropagation();
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div
      className="text-lg font-bold cursor-pointer p-1 rounded-md mb-2 w-3/5 hover:bg-gray-200"
      onClick={handleClick}
    >
      {isClick ? (
        <form onSubmit={handleSubmit} className="w-full">
          <input
            autoFocus
            type="text"
            className="w-full p-1 rounded-md outline-none"
            value={inputCardTitle}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={10}
          />
        </form>
      ) : (
        <span>{inputCardTitle}</span>
      )}
    </div>
  );
};
