import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Routes>
          <Route path="/" Component={EmailList}></Route>
          <Route path="/mail" Component={Mail}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
