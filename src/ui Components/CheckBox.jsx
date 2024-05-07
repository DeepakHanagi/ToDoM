import styles from "./CheckBox.module.css";
function CheckBox({ checked, onChange, label, onClick }) {
  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={onChange}
        onClick={onClick}
      />
      <span className={styles.checkmark}></span>
      {label}
    </label>
  );
}

export default CheckBox;
