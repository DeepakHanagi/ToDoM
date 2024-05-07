import styles from "./Todo.module.css";
import TodoList from "../features/TodoList";
import Inputs from "../features/Inputs";
import { TodoProvider, TodoContext } from "../context/TodoContext";

function Todo() {
  return (
    <div className={styles.todoPage}>
      <TodoProvider>
        <Inputs />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default Todo;

// <Inputs text={text} setText={setText} onAdd={handleAdd} />
// <TodoList goal={state} onCheck={handleCheck} onDelete={handleDelete} />
