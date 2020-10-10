// import react and the libraries that you need
import React from 'react';
import "./ToDoItem.css";


function TodoItem(props) {
    const { todo, index, completeTodo, removeTodo } = props;

    return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
        {todo.text}
    <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
    </div>
    </div>
    );
}

export default TodoItem;