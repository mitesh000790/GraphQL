import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter  } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";
import { ThemeProvider } from "./component/themeContext"
import swDev from "./swDev";


const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
    uri: 'https://graph-ql1.herokuapp.com',
    cache: new InMemoryCache(),
    headers:{
        authorization:localStorage.getItem("token") || ""
    }
});

root.render(
  <React.StrictMode>
      <ThemeProvider>
          <BrowserRouter >
              <ApolloProvider client={client}>
                <App />
              </ApolloProvider>
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
swDev()
