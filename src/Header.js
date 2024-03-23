import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOptions from "./HeaderOptions";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        {/* logo */}
        <img
          src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="my network" />
        <HeaderOptions Icon={WorkIcon} title="Job" />
        <HeaderOptions Icon={MessageIcon} title="Message" />
        <HeaderOptions Icon={NotificationsIcon} title="Notification" />
        <HeaderOptions
          onClick={logoutOfApp}
          avatar="https://randomuser.me/api/portraits/men/1.jpg"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
