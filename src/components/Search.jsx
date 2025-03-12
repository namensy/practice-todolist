import React from "react";

const Search = ({ setTodos, setTodosList, todos, todosList }) => {
  const handleAdd = (e) => {
    setTodosList([...todosList, todos]);
    setTodos("");
  };

  return (
    <>
      <input
        className="w-full text-white bg-[#1F1F1F] outline-none px-4 py-3 rounded-lg"
        type="text"
        placeholder="Add task .."
        onChange={(e) => setTodos(e.target.value)}
        value={todos}
      />
      <button
        className="text-white p-5 rounded-lg bg-[#1F1F1F]"
        onClick={(e) => handleAdd(e)}
      >
        Add
      </button>
    </>
  );
};

export default Search;
