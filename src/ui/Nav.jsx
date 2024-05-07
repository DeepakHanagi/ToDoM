import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.navContent}>
      <nav>
        <li className={styles.logo}>
          <Link to="/">ToDo</Link>
        </li>
        <li>
          <Link to="/todo">Todo List</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </nav>
    </div>
  );
}

export default Nav;
