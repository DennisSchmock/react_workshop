import React from 'react';
import './App.css';
import { TodoList } from './components/ToDoList';
// import { TodosInitial } from './components/data';
import { NewTodoForm } from './components/NewTodoForm';
import { useStore } from './store/useTodoStore';

export const App = () => {
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);
  const toggleDone = useStore((state) => state.toggleDone);
  const handleDelete = useStore((state) => state.handleDelete);

  const addNewTodo = (todoName: string) => {
    addTodo(todoName);
  };

  return (
    <div className="App">
      <h1>IST Todo App</h1>
      <NewTodoForm handleAddNewTodo={addNewTodo}></NewTodoForm>
      <TodoList toggleDone={toggleDone} handleDelete={handleDelete} todos={todos} />
    </div>
  );
};

export default App;
