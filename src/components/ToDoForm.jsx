import React, { useState } from "react";
// Import component Button dari MUI
import Button from "@mui/material/Button";
// Import component TextField dari MUI (kali ini kita gunakan destructuring)
import { TextField } from "@mui/material";

// Karena sudah pasti ada data yang akan diterima, tampung propsnya dulu yah !
function ToDoForm(props) {
  // Input form, awalnya kosong
  const [inputData, setInputData] = useState("");

  const inputOnChangeHandler = (event) => {
    setInputData(event.target.value);
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();
    // Panggil props fnAddTodos
    props.fnAddTodos(inputData);
    // Kosongkan lagi input
    setInputData("");
  };

  return (
    <form
      style={{
        margin: "0.5em 0em",
        // Tambah css agar bisa sama besar component TextField dan Button
        display: "flex",
      }}
      onSubmit={formOnSubmitHandler}
    >
      {/* Ganti input menjadi TextField */}
      <TextField
        type="text"
        style={{ marginRight: "0.5em" }}
        value={inputData}
        onChange={inputOnChangeHandler}
        // ini prop (attribute) baru
        label="Input kerjaan baru"
        size="small"
        variant="filled"
      />
      {/* Ganti button menjadi Button dengan opsi baru */}
      <Button type="submit" variant="contained" size="large">
        Tambah kerjaan
      </Button>
    </form>
  );
}

export default ToDoForm;
