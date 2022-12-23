import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import './index.css';
import { CartContextProvider } from './context/CartContext';
import reportWebVitals from './reportWebVitals';
import {router} from "./router";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAz-nGdeqRaR7bVeFIstLxryYmSny7p1tM",
  authDomain: "proyecto-final-coder-451e3.firebaseapp.com",
  projectId: "proyecto-final-coder-451e3",
  storageBucket: "proyecto-final-coder-451e3.appspot.com",
  messagingSenderId: "657183380976",
  appId: "1:657183380976:web:0cba085e8ca3a2fe9cb935"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
