import Main from "../Layout/Main";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import SignUp from "../pages/SignUp";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/shop/:id',
                element: <ProductDetails></ProductDetails>
            },

            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
]);
export default router;