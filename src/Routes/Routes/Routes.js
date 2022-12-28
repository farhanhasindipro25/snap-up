import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Login from "../../Pages/UserRegistration/Login";
import Signup from "../../Pages/UserRegistration/Signup";
import TaskBoard from "../../Layouts/TaskBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <></>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/task-board",
    element: <TaskBoard></TaskBoard>,
    children: [
      {
        path: "/task-board",
        element: <></>,
      },
    ],
  },
]);

export default router;
