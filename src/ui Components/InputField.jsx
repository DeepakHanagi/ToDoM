import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ placeholder, text, setText }) => {
  return (
    <input
      className={styles.inputField}
      type="text"
      placeholder={placeholder}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default InputField;
