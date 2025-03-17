import React, { useState } from "react";

const Search = ({
  setTodos,
  todos,
  checked,
  handleChange,
  handleAdd,
  selectedIndex,
}) => {
  return (
    <>
      <input
        className="flex-1/2 text-white bg-[#1F1F1F] block outline-none px-5 py-7 text-lg"
        type="text"
        placeholder="Add task .."
        onChange={(e) => setTodos(e.target.value)}
        value={todos || ""}
      />
      <button
        className="text-white bg-[#a21dd6] block px-[70px] rounded-l-4xl py-7 -ml-6 cursor-pointer text-lg"
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
