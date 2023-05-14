import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { HelpOutlined, SettingsOutlined } from "@mui/icons-material";
import { TuneOutlined } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { logout } from "../redux/userSlice";
function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
          alt=""
        />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <TuneOutlined className="header__inputCaret" />{" "}
      </div>

      <div className="header__right">
        <IconButton>
          <HelpOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Avatar
            src={user?.photoUrl}
            sx={{ width: "28px", height: "28px" }}
            onClick={() => dispatch(logout())}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
