import React from "react";
import "./Sidebar.css";
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
function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<CreateOutlined fontSize="large" />}
        sx={{ color: "#212111", fontWeight: 600 }}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxOutlined}
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
      <SidebarOption Icon={NearMeOutlined} title="Sent" number={5} />
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
