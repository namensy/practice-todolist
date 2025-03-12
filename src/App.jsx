import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [todos, setTodos] = useState("");
  const [todosList, setTodosList] = useState([]);

  const handleDelete = (index) => {
    // เราไปเปลี่ยนค่า React State โดยตรง ทำให้ React ไม่รู้ว่าโค้ดมีการเปลี่ยนแปลงเพราะ Reference ของ todosList เป็นอันเดิม
    // todosList.splice(index, 1);
    // setTodosList(todosList);

    const newTodo = [...todosList];
    newTodo.splice(index, 1);
    setTodosList(newTodo);
  };

  const handleEdit = (index, task) => {
    // ทำ Edit ยังไง เวลาเราคลิกที่ปุ่ม ละ Cursor ไปอยู๋ตรงที่พิม input จากนั้นกด Enter เราจะเป็นการแก้ไข Todo นั้นๆทันที
    const newEdit = [...todosList];
    console.log(task);
    // ทำการกด Edit ละช่องกับไป Focus ที่ข้อความ
    setTodos(newEdit[index]);
    // จากนั้นเราต้องรับค่าจาก input ที่ user ใส่กลับมา update ใน state หรือข้อความนั้นๆ
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-gradient text-3xl font-bold">Todo List</h1>
        <div className="flex gap-2 p-2 m-10 h-[80px]">
          <Search
            setTodos={setTodos}
            setTodosList={setTodosList}
            todos={todos}
            todosList={todosList}
          />
        </div>
        <ul>
          {todosList &&
            todosList.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-white p-8 mt-5 bg-purple-950 rounded-3xl"
              >
                <p>{task}</p>
                <div className="flex gap-2">
                  <img
                    onClick={() => handleEdit(index)}
                    className="w-8 h-8"
                    src="/edit.png"
                    alt="edit"
                  />
                  <img
                    onClick={() => handleDelete(index, task)}
                    className="w-8 h-8"
                    src="/bin.png"
                    alt="bin"
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
