import React from "react";

function ToDoTable(props) {
  // Perhatikan fungsi ini tidak menerima event
  const btnOnClickHandler = (todoId) => {
    // di sini kita akan memanggil props fnCompleteTodo
    // beserta value todoId akan dilempar
    props.fnCompleteTodo(todoId);
  };

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
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.name}</td>
            <td>{todo.isCompleted ? "Selesai" : "Belum Selesai"}</td>
            {/* Nanti kita akan kembali ke sini lagi */}
            <td>
              {todo.isCompleted ? (
                ""
              ) : (
                // onClick di sini akan menggunakan fungsi arrow
                // untuk bisa memanggil fungsi btnOnClickHandler
                // sambil passing value todo.id
                <button onClick={() => btnOnClickHandler(todo.id)}>
                  Selesaikan
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ToDoTable;
