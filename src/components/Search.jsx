import React, { useState } from "react";

const Search = ({
  setTodos,
  setTodosList,
  todos,
  todosList,
  checked,
  handleChange,
  handleAdd,
  selectedIndex,
}) => {

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setTodosList([...todosList, todos]);
      setTodos("");
    }
  }
  
  return (
    <>
      <input
        className="flex-1/2 text-white bg-[#1F1F1F] block outline-none px-10 py-6 text-md"
        type="text"
        placeholder="Add task .."
        onChange={(e) => setTodos(e.target.value)}
        value={todos || ""}
        onKeyDown={handleKeyDown}
      />
      <button
        className="text-white bg-[#a21dd6] block px-[60px] rounded-l-4xl py-6 -ml-6 cursor-pointer text-md hover:bg-[#b11dd6af] "
        onClick={() => {
          checked ? handleChange(selectedIndex) : handleAdd();
        }}
      >
        {checked ? "Edit" : "Add"}
      </button>
    </>
  );
};

export default Search;
