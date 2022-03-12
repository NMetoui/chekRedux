import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, updateTodo } from "../../redux/todoSlice";

const Task = ({ id, title, completed }) => {
  const [update, setUpdate] = useState(false);
  const [updateval, setUpdateval] = useState("");
  const dispatch = useDispatch();

  const HandleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const handleUpdateClick = () => {
    dispatch(updateTodo({ id: id, title: updateval }));
    console.log(updateval);

    setUpdate(!update);
  };

  return (
    <div>
      <div style={{ padding: "10px" }}>
        <div className="d-flex justify-content-evenly">
          {update ? (
            <input
              style={{ width: "30%" }}
              type="text"
              value={updateval}
              onChange={(e) => {
                setUpdateval(e.target.value);
              }}
            />
          ) : (
            <span className="d-flex align-items-center">
              <input
                type="checkbox"
                className="mr-3"
                checked={completed}
                onChange={HandleCompleteClick}
              ></input>
              {title}
            </span>
          )}
          <button className="btn btn-danger" onClick={handleDeleteClick}>
            Delete
          </button>
          {update ? (
            <button className="btn btn-primary " onClick={handleUpdateClick}>
              Save
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => {
                setUpdate(!update);
              }}
            >
              update
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Task;
