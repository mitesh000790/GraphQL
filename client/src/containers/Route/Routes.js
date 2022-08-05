import Login from "../Login/Login"
import SignUp from "../Signup/SignUp"
import Profile from "../Profile/Profile"
import CreateQuote from "../CreateQuote/CreateQuote"

import { useRoutes } from "react-router-dom";
import Home from "../Home/Home";


function Routing() {
    const element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "profile", element: <Profile /> },
        { path: "create-quote", element: <CreateQuote /> }
    ]);
    return element;
}

export default Routing


