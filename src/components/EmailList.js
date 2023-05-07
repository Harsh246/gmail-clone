import React from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@mui/material";
import {
  ArrowDropDown,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  Person,
  RefreshOutlined,
  Settings,
} from "@mui/icons-material";
import Section from "./Section";
import EmailRow from "./EmailRow";

function EmailList() {
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
        <div className="emailList__sections">
          <Section title="Primary" Icon={Inbox} selected color="red" />
          <Section title="Social" Icon={Person} color="#1A73E8" />
          <Section title="Promotions" Icon={LocalOffer} color="green" />
        </div>
        <div className="emailList__container">
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />{" "}
          <EmailRow
            title="Twitch"
            subject="I need to talk"
            description={"we should talk"}
            time={"10:25AM"}
          />
          {/* <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow />
        <EmailRow /> */}
        </div>
      </section>
    </div>
  );
}

export default EmailList;
