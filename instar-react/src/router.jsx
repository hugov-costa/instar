import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import CreateContact from "./views/CreateContact";
import EditContact from "./views/EditContact";
import Login from "./views/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/novo",
        element: <CreateContact />,
    },
    {
        path: "/editar",
        element: <EditContact />,
    },
]);

export default router;
