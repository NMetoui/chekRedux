import React from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { useState } from "react";

const Listtask = () => {
  const todos = useSelector((state) => state.todos);
  // const todos = [
  //   { id: 1, title: "todo1", completed: false },
  //   { id: 2, title: "todo2", completed: false },
  //   { id: 3, title: "todo3", completed: true },
  //   { id: 4, title: "todo4", completed: false },
  //   { id: 5, title: "todo5", completed: false }
  // ];

  const [filter, setFilter] = useState("All");
  const displayFilter = (e) => {
    switch (e.target.value) {
      case "Done":
        setFilter("Done");
        break;
      case "unDone":
        setFilter("unDone");
        break;
      default:
        setFilter("All");
    }
  };

  return (
    <div>
      <div className="select-status__styling">
        <label>Filter by status</label>

        <select name="#" id="select__styling" onChange={displayFilter}>
          <option value="All">All</option>
          <option value="Done">Done</option>
          <option value="unDone">unDone</option>
        </select>
      </div>
      {filter === "Done"
        ? todos
            .filter((todo) => todo.completed === true)
            .map((todo) => (
              <Task
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
              />
            ))
        : filter === "unDone"
        ? todos
            .filter((todo) => todo.completed === false)
            .map((todo) => (
              <Task
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
              />
            ))
        : todos.map((todo) => (
            <Task id={todo.id} title={todo.title} completed={todo.completed} />
          ))}
    </div>
  );
};

export default Listtask;
