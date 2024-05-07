import styles from "./Footer.module.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p className={styles.footContent}>Copy right reserved {year}</p>
    </footer>
  );
}

export default Footer;
