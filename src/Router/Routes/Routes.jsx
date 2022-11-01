import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../../Layout/AdminLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AdminPannel/AddProduct/AddProduct";
import AdminPannel from "../../Pages/AdminPannel/AdminPannel/AdminPannel";
import AllProduct from "../../Pages/AdminPannel/AllProduct/AllProduct";
import ManageAdmin from "../../Pages/AdminPannel/ManageAdmin/ManageAdmin";
import ManageAppointment from "../../Pages/AdminPannel/ManageAppointment/ManageAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin",
                element: <AdminPannel />
            },
            {
                path: "/admin/addProduct",
                element: <AddProduct />
            },
            {
                path: "/admin/allProduct",
                element: <AllProduct />
            },
            {
                path: "/admin/makeAdmin",
                element: <ManageAdmin />
            },
            {
                path: "/admin/appointment",
                element: <ManageAppointment />
            }
        ]
    }
])

export default routes;