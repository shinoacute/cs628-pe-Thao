import React from "react";

function Todoitem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default Todoitem;