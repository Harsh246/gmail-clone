import React from "react";
import "./styles/SidebarOption.css";
import { useNavigate } from "react-router-dom";
function SidebarOption({ Icon, title, number, selected, navigateTo }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(navigateTo)}
      className={`sidebarOption ${selected && "sidebarOption--active"}`}
    >
      <Icon fontSize="small" />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
