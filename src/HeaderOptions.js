import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";

function HeaderOptions({ avatar, Icon, title, onClick }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="header_option_icon" />}
      {avatar && <Avatar className="header_option_avatar" src={avatar} />}
      <h3 className="header_option_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
