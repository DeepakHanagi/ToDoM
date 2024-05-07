import { useNavigate } from "react-router-dom";
import Button from "../ui Components/Button";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();

  function handleToTodo() {
    navigate("/todo");
    console.log("clicked Todo");
  }

  function handleToAbout() {
    navigate("/about");
    console.log("clicked about");
  }

  return (
    <div className={styles.hero}>
      <h1>Hello There! Welcome to ToDoM</h1>
      <p>Track your goals here</p>
      <div className={styles.heroBtn}>
        <Button type={"primary"} onClick={handleToTodo}>
          Let's Start
        </Button>
        <Button type={"secondary"} onClick={handleToAbout}>
          About
        </Button>
      </div>
    </div>
  );
}

export default Home;
