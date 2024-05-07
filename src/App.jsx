import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Todo from "./pages/Todo";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Todo",
        element: <Todo />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className={styles.app}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
