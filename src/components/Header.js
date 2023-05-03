import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon fontSize="large" />
        </IconButton>
        <img
          src="https://cdn.vox-cdn.com/thumbor/x1-9UwiB_BeLufaPfDTRaLrACBo=/0x0:1320x880/1200x628/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
      </div>

      <div className="header__middle">
        <SearchIcon fontSize="large" />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon
          fontSize="large"
          className="header__inputCaret"
        />{" "}
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <NotificationsIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <Avatar size="small" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
