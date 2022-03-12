import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
const Addtask = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addTodo({
          title: value,
        })
      );
    }
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <input
        type="text"
        className="mb-3"
        placeholder="Enter Task..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-primary " id="button-addon2">
        Add Todo
      </button>
    </form>
  );
};

export default Addtask;
