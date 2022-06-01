import React from "react";
// Import Component MUI di sini
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function ToDoTable(props) {
  // Perhatikan fungsi ini tidak menerima event
  const btnOnClickHandler = (todoId) => {
    // di sini kita akan memanggil props fnCompleteTodo
    // beserta value todoId akan dilempar
    props.fnCompleteTodo(todoId);
  };

  return (
    // Gunakan Component MUI di sini
    <Table sx={{ maxWidth: 650 }}>
      <TableHead>
        <TableRow>
          <TableCell>ToDo Id</TableCell>
          <TableCell>ToDo Name</TableCell>
          <TableCell>ToDo Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Asumsi nama props adalah todos */}
        {props.todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell>{todo.id}</TableCell>
            <TableCell>{todo.name}</TableCell>
            <TableCell>
              {todo.isCompleted ? "Selesai" : "Belum Selesai"}
            </TableCell>
            {/* Nanti kita akan kembali ke sini lagi */}
            <TableCell>
              {todo.isCompleted ? (
                ""
              ) : (
                // onClick di sini akan menggunakan fungsi arrow
                // untuk bisa memanggil fungsi btnOnClickHandler
                // sambil passing value todo.id
                <Button
                  variant="contained"
                  onClick={() => btnOnClickHandler(todo.id)}
                >
                  Selesaikan
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ToDoTable;
