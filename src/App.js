import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./features/userSlice";

import Login from "./components/Login";

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="app">
      {!isLoggedIn ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" Component={EmailList}></Route>
              <Route path="/mail" Component={Mail}></Route>
            </Routes>
          </div>

          <SendMail />
        </>
      )}
    </div>
  );
}

export default App;
