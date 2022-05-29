import React, { useState } from "react";
// Import ToDoForm dan ToDoTable
import ToDoForm from "../components/ToDoForm.jsx";
import ToDoTable from "../components/ToDoTable.jsx";

function ToDo() {
  // Sekarang state kita berbentuk array of object !
  const [todos, setTodos] = useState([
    { id: 1, name: "Review DOM", isCompleted: true },
    { id: 2, name: "Belajar Nge-React", isCompleted: false },
    { id: 3, name: "Belajar Component React", isCompleted: false },
  ]);

  const addTodos = (newTodo) => {
    // Logic untuk membuat id terbaru
    // ambil dari object paling akhir punya id, tambahkan 1
    const newId = todos[todos.length - 1].id + 1;

    const objTodo = {
      id: newId,
      name: newTodo,
      isCompleted: false,
    };

    const newTodos = [...todos, objTodo];
    setTodos(newTodos);
  };

  return (
    <>
      <div>Aplikasi ToDo</div>
      {/* Kita tambahkan component ToDoForm dan ToDoTable */}
      {/* Jangan lupa untuk passing props todos ke dalam ToDoTable */}
      <ToDoForm fnAddTodos={addTodos} />
      <ToDoTable todos={todos} />
    </>
  );
}

export default ToDo;
