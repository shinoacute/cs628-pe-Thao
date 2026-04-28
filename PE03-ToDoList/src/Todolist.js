import React from "react";
import Todoitem from "./Todoitem";

function Todolist({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p className="empty-message">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default Todolist;