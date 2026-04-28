import React, { useState } from "react";
import TodoList from "./Todolist";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const newTodo = {
      id: Date.now(),
      text: trimmed,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddTask();
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>My To‑Do List</h1>
        <p className="subtitle">Stay organized, one task at a time.</p>
      </header>

      <main className="app-main">
        <div className="input-row">
          <input
            type="text"
            className="todo-input"
            placeholder="Enter a new task…"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="add-btn" onClick={handleAddTask}>
            Add Task
          </button>
        </div>

        <section className="list-section">
          <h2 className="list-heading">
            Tasks <span className="task-count">{todos.length}</span>
          </h2>
          <TodoList todos={todos} onDelete={handleDelete} />
        </section>
      </main>
    </div>
  );
}

export default App;