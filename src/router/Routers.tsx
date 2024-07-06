import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../components/layout/MainLayout";
import { AdminPaths, FacultyPaths, StudentPaths } from "./Routs";
import { CreatePath } from "../utils/CreateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/admin",
        element: <App/>,
        children: CreatePath(AdminPaths)
    },
    {
        path: "/faculty",
        element: <App/>,
        children: CreatePath(FacultyPaths)
    },
    {
        path: "/student",
        element: <App/>,
        children: CreatePath(StudentPaths)
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "register",
        element: <Register/>
    }
])

export default router