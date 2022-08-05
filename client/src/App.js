import './App.css';
import React from "react";
import Navbar from "./containers/Navbar/Navbar";
import Routing from "./containers/Route/Routes";
import Helmet from "react-helmet"

function App() {
  return (
    <div>
        {/*<Helmet*/}
        {/*    titleTemplate="%s - An ....."*/}
        {/*    defaultTitle="Quote Book"*/}
        {/*>*/}
        {/*    <meta name="description" content="Quote Book" />*/}
        {/*</Helmet>*/}
        <Navbar/>
        <Routing/>
    </div>
  );
}

export default App;
