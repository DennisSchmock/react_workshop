import React, { useCallback, useState } from 'react';
import './App.css';
import { Todo } from './components/ToDoItem';
import { TodoList } from './components/ToDoList';
import { TodosInitial } from './components/data';
import { NewTodoForm } from './components/NewTodoForm';
import { v4 as uuidv4 } from 'uuid';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(TodosInitial);

  const addNewTodo = (todoName: string) => {
    const newTodo: Todo = { content: todoName, id: uuidv4(), done: false };
    setTodos([...todos, newTodo]);
  };

  const toggleDone = useCallback(
    (id: string) => {
      const newArray = todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      });
      setTodos(newArray);
    },
    [todos]
  );
  const handleDelete = useCallback(
    (id: string) => {
      console.log(id);
      const newTodoArray = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(newTodoArray);
    },
    [todos]
  );

  return (
    <div className="App">
      <h1>IST Todo App</h1>
      <NewTodoForm handleAddNewTodo={addNewTodo}></NewTodoForm>
      <TodoList toggleDone={toggleDone} handleDelete={handleDelete} todos={todos} />
    </div>
  );
};

export default App;
