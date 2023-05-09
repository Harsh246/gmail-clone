import {
  CloseOutlined,
  MaximizeOutlined,
  MinimizeOutlined,
} from "@mui/icons-material";
import { Button, TextareaAutosize, Typography } from "@mui/material";
import React, { useRef } from "react";
import "./SendMail.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSendMessageIsOpen,
  selectSendMessageIsMinimized,
} from "../features/mailSlice";
import { useForm } from "react-hook-form";

import { closeSendMessage, toggleSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import { getFirestore, serverTimestamp } from "firebase/firestore";

function SendMail({ user }) {
  const isOpen = useSelector(selectSendMessageIsOpen);
  const isMinimized = useSelector(selectSendMessageIsMinimized);
  const dispatch = useDispatch();

  const { handleSubmit, register } = useForm();
  const ref = useRef();

  const onSubmit = (formData) => {
    console.log("formData: ", formData);

    console.log(ref.current.innerText);
    // db.collections("emails").add({
    //   to: formData.to,
    //   subject: formData.from,
    //   message: ref.current.innerText,
    //   time: serverTimestamp(),
    //   from: user.email,
    // });
  };
  return (
    <form
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
    </form>
  );
}

export default SendMail;
