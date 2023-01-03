import create from 'zustand';
import { Todo } from '../components/ToDoItem';
import { v4 as uuidv4 } from 'uuid';

interface TodoState {
  todos: Todo[];
  addTodo: (content: string) => void;
  toggleDone: (id: string) => void;
  handleDelete: (id: string) => void;
}

export const useStore = create<TodoState>()((set, get) => ({
  todos: [],
  addTodo: (content) => {
    const newTodo: Todo = { id: uuidv4(), content: content, done: false };
    return set((state) => ({
      todos: [...state.todos, newTodo],
    }));
  },
  toggleDone: (id) => {
    const newArray = get().todos.map((todo) => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    });
    return set({ todos: newArray });
  },
  handleDelete: (id: string) => {
    const newArray = get().todos.filter((todo) => {
      return todo.id !== id;
    });
    return set({ todos: newArray });
  },
}));
