import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import AddProjects from "./Pages/AddProjects";
import Login from "./Pages/Login";
import ProjectRequirements from "./Pages/ProjectRequirements";

export const Route = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/user',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'add-project',
                element: <AddProjects />
            },
            {
                path: 'add-requirements',
                element: <ProjectRequirements />
            },
        ]
    }
]);
