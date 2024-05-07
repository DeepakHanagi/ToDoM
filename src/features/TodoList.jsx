import { useContext } from "react";
import ListItem from "./ListItem";
import styles from "./TodoList.module.css";
import { TodoContext } from "../context/TodoContext";

function TodoList() {
  const { state } = useContext(TodoContext);

  return (
    <ul>
      {state.map((goal) => (
        <ListItem goal={goal} key={goal.id} />
      ))}
    </ul>
  );
}

export default TodoList;
