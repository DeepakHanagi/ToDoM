import styles from "./Button.module.css";
function Button({ type, children, onClick }) {
  if (type === "primary")
    return (
      <button className={styles.prime} onClick={onClick}>
        {children}
      </button>
    );

  if (type === "secondary")
    return (
      <button className={styles.second} onClick={onClick}>
        {children}
      </button>
    );
}

export default Button;
