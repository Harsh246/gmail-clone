import {
  CloseOutlined,
  MaximizeOutlined,
  MinimizeOutlined,
} from "@mui/icons-material";
import { Button, TextareaAutosize, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "../styles/SendMail.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSendMessageIsOpen,
  selectSendMessageIsMinimized,
} from "../redux/mailSlice";
import { useForm } from "react-hook-form";

import { closeSendMessage, toggleSendMessage } from "../redux/mailSlice";
import { db } from "../firebase";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { selectUser } from "../redux/userSlice";
import Snackbar from "@mui/material/Snackbar";
import autoAnimate from "@formkit/auto-animate";

function SendMail() {
  const [open, setOpen] = useState(false);
  const isOpen = useSelector(selectSendMessageIsOpen);
  const isMinimized = useSelector(selectSendMessageIsMinimized);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const { handleSubmit, register, reset } = useForm();
  const ref = useRef();

  const onSubmit = (formData) => {
    const emailsCollection = collection(db, "emails");

    addDoc(emailsCollection, {
      to: formData.to,
      subject: formData.subject,
      message: ref.current.innerText,
      from: user.email,
      time: serverTimestamp(),
      sentBy: user.displayName,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setOpen(true);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    reset();
    ref.current.innerText = "";
    dispatch(closeSendMessage());
    debugger;
  };
  return (
    <form
      ref={parent}
      className={`sendMail ${
        isOpen
          ? isMinimized
            ? "sendMail--minimized"
            : "sendMail--open"
          : "sendMail--close"
      }`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="sendMail__header">
        <Typography
          variant="subtitle1 dark"
          sx={{ fontWeight: 600, fontSize: "15px", marginLeft: "16px" }}
        >
          New Message
        </Typography>
        <div className="sendMail__headerTools">
          {isMinimized ? (
            <MaximizeOutlined
              sx={{ cursor: "pointer" }}
              fontSize="small"
              onClick={() => dispatch(toggleSendMessage())}
            />
          ) : (
            <MinimizeOutlined
              sx={{ cursor: "pointer" }}
              fontSize="small"
              onClick={() => dispatch(toggleSendMessage())}
            />
          )}

          <CloseOutlined
            sx={{ cursor: "pointer" }}
            onClick={() => dispatch(closeSendMessage())}
            fontSize="small"
          />
        </div>
      </div>

      <div className="sendMail__body">
        <div className="sendMail__to">
          <Typography sx={{ fontSize: "15px" }}>To</Typography>
          <input required type="email" name="to" {...register("to")} />
        </div>
        <div className="sendMail__subject">
          <Typography sx={{ fontSize: "15px" }}>Subject</Typography>
          <input required type="text" name="subject" {...register("subject")} />
        </div>
      </div>

      <div ref={ref} className="sendMail__message" contentEditable></div>
      <div className="sendMail__footer">
        <Button type="submit" variant="contained">
          Send
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Sent successfully."
      />
    </form>
  );
}

export default SendMail;
