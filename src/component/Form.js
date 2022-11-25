import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

function Form() {
  const [value, setValue] = useState("");
  //   console.log(data);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const todo = {
      name: value,
      id: Math.random(),
      completed: false,
    };
    if (value.trim().length > 0) {
      dispatch(addTodo(todo));
    }

    setValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={value} onChange={changeHandler} />
      {/* <input
        type="checkbox"
        value={data.isChecked}
        name="isChecked"
        onChange={changeHandler}
      /> */}
      <button>ADD</button>
    </form>
  );
}

export default Form;
