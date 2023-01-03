import React, { useEffect, useMemo, useState } from 'react';
export interface Todo {
  id: string;
  done: boolean;
  content: string;
}

interface ToDoProps {
  todo: Todo;
  toggleDone: (id: string) => void;
  handleDelete: (id: string) => void;
}
export const ToDoItemMemo = ({ todo, toggleDone, handleDelete }: ToDoProps) => {
  //   const [countToggle, setCountToggle] = useState<number>(0);

  useEffect(() => {
    console.log('I rendered', todo.id);
  }, []);

  //   const expensiveFunktion = () => {
  //     let counting = 0;
  //     for (let i = 0; i < 100000000; i++) {
  //       counting++;
  //     }
  //     return counting;
  //   };

  //   const memoizedExpensiveValue = useMemo(() => {
  //     return expensiveFunktion();
  //   }, [todo]);

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
      {/* {memoizedExpensiveValue} */}
    </div>
  );
};

// const areTheyEqual = (prev: ToDoProps, next: ToDoProps): boolean => {
//   return true;
// };

export const ToDoItem = React.memo(ToDoItemMemo);
