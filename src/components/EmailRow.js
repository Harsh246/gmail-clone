import React from "react";
import "../styles/EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedMail } from "../redux/mailSlice";

function EmailRow({ email }) {
  const { id, from, subject, time, message } = email;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = () => {
    email.time = new Date(email.time?.toDate()).toDateString();
    dispatch(setSelectedMail(email));
    navigate("/mail");
  };

  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox size="small" />
        <IconButton>
          <StarBorderOutlined fontSize="small" />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined fontSize="small" />
        </IconButton>
      </div>
      <h3 onClick={handleClick} className="emailRow__title">
        {email?.sentBy || "Play.ht"}
      </h3>
      <div onClick={handleClick} className="emailRow__message">
        <h4>
          {subject} <span className="emailRow__description">- {message}</span>
        </h4>
      </div>

      <p className="emailRow__time" onClick={handleClick}>
        {new Date(time?.toDate()).toDateString()}
      </p>
    </div>
  );
}

export default EmailRow;
