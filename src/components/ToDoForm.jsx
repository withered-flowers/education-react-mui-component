import React, { useState } from "react";

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
    <form style={{ margin: "0.5em 0em" }} onSubmit={formOnSubmitHandler}>
      <input
        type="text"
        style={{ marginRight: "0.5em" }}
        placeholder="Input kerjaan baru"
        // Ingat untuk set value dan event changenya untuk perubahan ke state
        value={inputData}
        onChange={inputOnChangeHandler}
      />
      <button type="submit">Tambah kerjaan</button>
    </form>
  );
}

export default ToDoForm;
