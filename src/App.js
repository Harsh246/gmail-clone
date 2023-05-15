import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { login, selectIsLoggedIn } from "./redux/userSlice";
import Login from "./components/Login";
import SentList from "./components/SentList";
import { useCookies } from "react-cookie";
import { Backdrop, CircularProgress } from "@mui/material";

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [cookies] = useCookies();
  const dispatch = useDispatch();

  const [checkState, setCheckState] = useState(true);

  useEffect(() => {
    if (cookies["access_token"]) {
      dispatch(
        login({
          displayName: cookies.display_name,
          email: cookies.email,
          photoUrl: cookies.photo_url,
        })
      );

      setCheckState(false);
    } else {
      setCheckState(false);
    }
  }, [cookies, dispatch, isLoggedIn]);

  if (checkState)
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );

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
              <Route path="/sent" Component={SentList}></Route>
            </Routes>
          </div>

          <SendMail />
        </>
      )}
    </div>
  );
}

export default App;
