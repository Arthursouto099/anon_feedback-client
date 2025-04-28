import {createBrowserRouter} from "react-router-dom"
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";



const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/DashBoard",
        element: < DashBoard />
    }
])


export default router;