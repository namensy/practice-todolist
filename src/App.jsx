import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [todos, setTodos] = useState("");
  const [checked, setChecked] = useState(false);
  const [todosList, setTodosList] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const handleAdd = () => {
    if (todos !== "") {
      setTodosList([...todosList, todos]);
      setTodos("");
    }
  };
  
  const handleDelete = (index) => {
    // เราไปเปลี่ยนค่า React State โดยตรง ทำให้ React ไม่รู้ว่าโค้ดมีการเปลี่ยนแปลงเพราะ Reference ของ todosList เป็นอันเดิม
    // todosList.splice(index, 1);
    // setTodosList(todosList);
    
    const newTodo = [...todosList];
    newTodo.splice(index, 1);
    setTodosList(newTodo);
  };
  
  const handleEdit = (index) => {
    const updatedTodoList = [...todosList];
    if (checked) {
      updatedTodoList[index] = todos;
      setTodosList(updatedTodoList);
      setChecked(false);
    }
  };
  
  const handleChange = (index) => {
    setChecked(true);
    setTodos(todosList[index]);
    setSelectedIndex(index);
    handleEdit(index);
  };
  
  useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todosList))
  }, [todosList])
  
  useEffect(() => {    
    const storedTodo = localStorage.getItem('todos')
    if (storedTodo) {
      setTodosList(JSON.parse(storedTodo))
    } else {
      setTodosList([])
    }
  }, [])
  
  
  return (
    <>
      <div className="max-w-[850px] mx-auto">
        <h1 className="text-gradient text-5xl font-bold text-center mt-[100px] select-none">Todo List</h1>
        <div className="flex my-[40px] items-center overflow-hidden rounded-4xl">
          <Search
            setTodos={setTodos}
            todos={todos}
            checked={checked}
            handleChange={handleChange}
            handleAdd={handleAdd}
            selectedIndex={selectedIndex}
          />
        </div>
        <ul>
          {todosList &&
            todosList.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-white p-8 mt-5 bg-purple-950 rounded-3xl"
              >
                <p className="text-2xl select-none">{task}</p>
                <div className="flex gap-3 items-center">
                  <img
                    onClick={() => handleChange(index)}
                    className="w-8 hover:scale-[1.2] transition-transform cursor-pointer select-none"
                    src="/edit.png"
                    alt="edit"
                  />
                  <img
                    onClick={() => handleDelete(index)}
                    className="w-8 h-7 hover:scale-[1.2]  transition-transform cursor-pointer select-none"
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
