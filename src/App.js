import React, { useState } from 'react';
import './App.css';
import TodoItem from "./components/TodoItem/todoitem";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Finish plus project.",
      isCompleted: false,
    },
    {
      text: "Feed cat",
      isCompleted: false,
    },
    {
      text: "sleep",
      isCompleted: false,
    },
  ]);

  const addToDo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos)
    console.log("test")
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    // if completed, mark as completed, if click again and completed mark as not-completed
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
    <div className="todo-list">
    <h1>My to do list</h1>
    {todos.map((todo, index) => (
      <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} removeTodo={removeTodo} />
    ))}
    <TodoForm addTodo={addToDo}/>
    </div>
    </div>
  );
}

export default App;
