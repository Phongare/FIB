import {useRoutes} from "react-router-dom"
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Register from "../pages/Register/Register";
import Map from "../pages/Map/Map";
import Cart from "../pages/Cart/Cart";

export default function Router () {
    const routes = useRoutes([
        {
            path: '',
            element: <Layout/>,
            children: [
                {path: '/', element: <Home/>},
                {path: '/about', element: <About/>},
                {path: '/map', element: <Map/>},
                {path: '/cart', element: <Cart/>}
            ]
        },
        {path: '/register', element: <Register/>}

    ])
    return routes
}