import React from "react";
import "./styles/Login.css";
import { Button } from "@mui/material";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useSelector } from "react-redux";
import { selectLoading } from "../redux/userSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login, logout, toggleLoadingState } from "../redux/userSlice";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useCookies } from "react-cookie";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const [cookies, setCookie] = useCookies();

  const [open, setOpen] = React.useState(false);

  const signIn = () => {
    // setOpen(true);

    dispatch(toggleLoadingState());

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );

        let expires = new Date();
        // expires.setTime(expires.getTime() + 60 * 1000);

        expires.setDate(expires.getDate() + 1);
        setCookie("access_token", user.accessToken, {
          path: "/",
          expires,
        });
        setCookie("display_name", user.displayName, {
          path: "/",
          expires,
        });
        setCookie("email", user.email, {
          path: "/",
          expires,
        });
        setCookie("photo_url", user.photoURL, {
          path: "/",
          expires,
        });
      })
      .catch((err) => {
        dispatch(logout());
        setOpen(true);
      });
  };
  return (
    <div className="login">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
      >
        <Alert severity="error"> Please try again later.</Alert>
      </Snackbar>
      <img src="/logo.png" alt="logo" />

      <div className="login__container">
        {
          <Button onClick={signIn} variant="contained" sx={{ width: "30vw" }}>
            Login{" "}
          </Button>
        }
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  );
}

export default Login;
