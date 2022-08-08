import Login from "../Login/Login"
import SignUp from "../Signup/SignUp"
import Profile from "../Profile/Profile"
import CreateQuote from "../CreateQuote/CreateQuote"

import { useRoutes } from "react-router-dom";
import Home from "../Home/Home";
import OtherQuote from "../OtherQuote/OtherQuote";


function Routing() {
    const element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/profile", element: <Profile /> },
        { path: "/create-quote", element: <CreateQuote /> },
        { path: "/other-profile/:id", element: <OtherQuote /> }
    ]);
    return element;
}

export default Routing


