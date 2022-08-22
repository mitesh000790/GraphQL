import './App.css';
import React from "react";
import Navbar from "./containers/Navbar/Navbar";
import Routing from "./containers/Route/Routes";

function App() {
    const online = navigator.onLine;
  return (
    <div>
        <Navbar/>
        {online === false && <div className="bg-red-100 w-full h-10 p-2 fixed mt-10 text-center  px-6 text-base text-red-700 dark:bg-red-300 dark:text-white" style={{marginTop: "70px"}} role="alert">
            You are in offline mode or some issue with connection.
        </div>}
        <Routing/>
    </div>
  );
}

export default App;
