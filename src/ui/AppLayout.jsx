import styles from "./AppLayout.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function AppLayout({ children }) {
  return (
    <div className={styles.appLayout}>
      <Nav className={styles.appNav} />

      <main className={styles.appMain}>
        <Outlet />
      </main>

      <Footer styles={styles.appFooter} />
    </div>
  );
}

export default AppLayout;
