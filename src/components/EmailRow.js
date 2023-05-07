import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton, Rating } from "@mui/material";
import {
  LabelImportantOutlined,
  Star,
  StarBorderOutlined,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
function EmailRow({ id, title, subject, time, description }) {
  const navigate = useNavigate();

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
      <h3 onClick={() => navigate("/mail")} className="emailRow__title">
        {title}
      </h3>
      <div onClick={() => navigate("/mail")} className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">- {description}</span>
        </h4>
      </div>

      <p className="emailRow__time" onClick={() => navigate("/mail")}>
        {time}
      </p>
    </div>
  );
}

export default EmailRow;
