import InputField from "../ui Components/InputField";
import styles from "./Inputs.module.css";
import Button from "../ui Components/Button";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function Inputs() {
  const { text, setText, handleAdd } = useContext(TodoContext);

  return (
    <div className={styles.inputs}>
      <InputField
        placeholder={"Enter your goal"}
        text={text}
        setText={setText}
      />
      <Button
        className={styles.btnPosition}
        type={"primary"}
        onClick={handleAdd}
      >
        Add to Todo
      </Button>
    </div>
  );
}

export default Inputs;
