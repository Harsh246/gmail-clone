import React from "react";
import "../styles/EmailList.css";
import { Checkbox, IconButton } from "@mui/material";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  MoreVert,
  RefreshOutlined,
} from "@mui/icons-material";

function SentList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox size="small" style={{ padding: 0 }} />
          <IconButton style={{ paddingLeft: 0 }} disableRipple>
            <ArrowDropDown fontSize="small" />
          </IconButton>
          <IconButton>
            <RefreshOutlined fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVert fontSize="small" />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft fontSize="small" />
          </IconButton>
          <IconButton>
            <ChevronRight fontSize="small" />
          </IconButton>
          {/* <IconButton>
            <KeyboardHide fontSize="small" />
          </IconButton>
          <IconButton>
            <Settings fontSize="small" />
          </IconButton> */}
        </div>
      </div>{" "}
      <section className="emailList__section">
        <div className="emailList__container">
          {/* <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "} */}
        </div>
      </section>
    </div>
  );
}

export default SentList;
