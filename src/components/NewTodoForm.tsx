import React, { ChangeEvent, FormEvent, useState } from 'react';

interface NewTodoFormProps {
  handleAddNewTodo: (todo: string) => void;
}
export const NewTodoForm = ({ handleAddNewTodo }: NewTodoFormProps) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddNewTodo(newTodo);
    setNewTodo('');
  };
  return (
    <div className="input-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          name="content"
          value={newTodo}
          onChange={handleChange}
          placeholder="Add new todo"
        />
      </form>
    </div>
  );
};
