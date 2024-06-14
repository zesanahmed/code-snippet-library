import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import About from "../pages/About";
import Login from "../components/Login/Login";
import Registration from "../components/Login/Registration";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";
import DashboardLayout from "../layouts/DashboardLayout";
import To_Do_List from "../pages/ToDoList";
import Ongoing_List from "../pages/OngoingList";
import Completed_List from "../pages/CompletedList";
import NewTasks from "../pages/NewTasks";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <Error/>,
      children: [
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/about",
            element: <About/>
        },
        {
            path:"/login",
            element: <Login/>
        },
        {
            path:"/registration",
            element: <Registration/>
        },
      ]
    },
    {
      path: "dashboard",
      element: <DashboardLayout/>,
      errorElement: <Error/>,
      children: [
          {
              path: "",
              element: <PrivateRoute>
                  <Dashboard/>
              </PrivateRoute>
          },
          {
              path: "dashboard/addTask",
              element: <PrivateRoute>
                  <NewTasks/>
              </PrivateRoute>
          },
          {
              path: "dashboard/todo",
              element: <PrivateRoute>
                  <To_Do_List/>
              </PrivateRoute>
          },
          {
              path: "dashboard/ongoing",
              element: <PrivateRoute>
                  <Ongoing_List/>
              </PrivateRoute>
          },
          {
              path: "dashboard/completed",
              element: <PrivateRoute>
                  <Completed_List/>
              </PrivateRoute>
          },
          
      ]
  }
  ]);