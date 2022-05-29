import React from "react";

function ToDoTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ToDo Id</th>
          <th>ToDo Name</th>
          <th>ToDo Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* Asumsi nama props adalah todos */}
        {props.todos.map((todo) => (
          <tr>
            <td>{todo.id}</td>
            <td>{todo.name}</td>
            <td>{todo.isCompleted ? "Selesai" : "Belum Selesai"}</td>
            {/* Nanti kita akan kembali ke sini lagi */}
            <td>{todo.isCompleted ? "" : <button>Selesaikan</button>}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ToDoTable;
