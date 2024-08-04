import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import AddProjects from "./Pages/AddProjects";

export const Route = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
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
            }
        ]
    }
]);
