import React from "react";
import "../styles/Sidebar.css";
import { Button, IconButton } from "@mui/material";

import {
  AccessTimeOutlined,
  CreateOutlined,
  DuoOutlined,
  ExpandMoreOutlined,
  LabelImportantOutlined,
  NearMeOutlined,
  NoteOutlined,
  PersonOutlined,
  PhoneOutlined,
  InboxOutlined,
  StarOutline,
} from "@mui/icons-material";
import SidebarOption from "./SidebarOption";

import { openSendMessage } from "../redux/mailSlice";
import { useDispatch } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<CreateOutlined fontSize="large" />}
        sx={{ color: "#212111", fontWeight: 500 }}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxOutlined}
        navigateTo="/"
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarOutline} title="Starred" number={12} />
      <SidebarOption Icon={AccessTimeOutlined} title="Snozzed" number={45} />
      <SidebarOption
        Icon={LabelImportantOutlined}
        title="Important"
        number={64}
      />
      <SidebarOption
        navigateTo="/sent"
        Icon={NearMeOutlined}
        title="Sent"
        number={5}
      />
      <SidebarOption Icon={NoteOutlined} title="Drafts" number={15} />
      <SidebarOption Icon={ExpandMoreOutlined} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonOutlined />
          </IconButton>{" "}
          <IconButton>
            <DuoOutlined />
          </IconButton>{" "}
          <IconButton>
            <PhoneOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
