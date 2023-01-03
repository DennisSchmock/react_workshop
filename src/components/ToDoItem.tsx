import React, { useEffect, useState } from 'react';
export interface Todo {
  id: string;
  done: boolean;
  content: string;
}

interface ToDoProps {
  todo: Todo;
  toggleDone: (id: string) => void;
  handleDelete: (id: string) => void;
  handleToogleEdit: (id: string) => void;
}
export const ToDoItem = ({ todo, toggleDone, handleDelete }: ToDoProps) => {
  return (
    <div className="todo">
      <li>
        <div>{todo.content}</div>
      </li>
      <button onClick={() => toggleDone(todo.id)} className="done-button">
        Færdig
      </button>
      <button onClick={() => handleDelete(todo.id)} className="delete-button">
        Slet
      </button>
      <input readOnly className="todo-checkbox" type="checkbox" checked={todo.done} />
    </div>
  );
};
