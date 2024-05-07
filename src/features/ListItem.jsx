import { useContext, useState } from "react";
import styles from "./ListItem.module.css";
import CheckBox from "../ui Components/CheckBox";
import { TodoContext } from "../context/TodoContext";

function ListItem({ goal }) {
  const { handleCheck, handleDelete } = useContext(TodoContext);

  const [checked, setChecked] = useState(false);

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <li className={styles.listItems}>
      <CheckBox
        checked={checked}
        onClick={handleChecked}
        onChange={() => handleCheck(goal.id)}
        label={
          <span className={goal.isDone === true ? styles.checked : ""}>
            {goal.goal}
          </span>
        }
        className={styles.checkboxItem}
      />
      <span
        className={styles.trash}
        onClick={() => handleDelete(goal.id, goal.isDone)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 32 32"
          className={styles.trashIcon}
        >
          <path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path>
        </svg>
      </span>
    </li>
  );
}

export default ListItem;

// <span>
//         <input type="checkbox" onChange={() => onCheck(goal.id)} />
//       </span>
//       <span className={goal.isDone === true ? styles.checked : ""}>
//         {goal.goal}
//       </span>
