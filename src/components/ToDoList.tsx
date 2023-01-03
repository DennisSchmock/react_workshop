import React from 'react';

import { Todo, ToDoItem } from './ToDoItem';

interface TodoListProps {
  todos: Todo[];
  toggleDone: (id: string) => void;
  handleDelete: (id: string) => void;
}

export const TodoList = ({ todos = [], toggleDone, handleDelete }: TodoListProps) => {
  return (
    <>
      {todos.length > 0 ? (
        <ul className="todolist">
          {todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} toggleDone={toggleDone} handleDelete={handleDelete} />
          ))}
        </ul>
      ) : (
        <div className="empty">Ingen opgaver her!</div>
      )}
    </>
  );
};
