import React, { useState } from "react";
// Import ToDoForm dan ToDoTable
import ToDoForm from "../components/ToDoForm.jsx";
import ToDoTable from "../components/ToDoTable.jsx";
// Import component Typography dari MUI
import { Typography } from "@mui/material";

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

  // Fungsi ini akan membuat sebuah array yang baru
  // dan memodifikasi satu baris data yang ditemukan
  // untuk membuat isCompleted nya menjadi true
  // berdasarkan idTodo yang diterima
  const completeTodo = (idTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === idTodo) {
        todo.isCompleted = true;
      }

      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <>
      {/* Ganti div menjadi Typography */}
      <Typography variant="h5">Aplikasi ToDo</Typography>
      {/* Kita tambahkan component ToDoForm dan ToDoTable */}
      {/* Jangan lupa untuk passing props todos ke dalam ToDoTable */}
      <ToDoForm fnAddTodos={addTodos} />
      {/* Jangan lupa tambahkan props fnCompleteToDo ke dalam table */}
      <ToDoTable todos={todos} fnCompleteTodo={completeTodo} />
    </>
  );
}

export default ToDo;
