import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../assets/images/Logo.png";
import DashBoardIcon from "../../assets/images/DashBoard.png";
// import DashBoardNavbarIconHover from "../../assets/images/DashboardNavbarIconHover.png";
import TransactionIcon from "../../assets/images/Transaction.png";
// import TransactionsNavbarIconHover from "../../assets/images/TransactionsNavbarIconHover.png";
import SettingIcon from "../../assets/images/Setting.png";
// import SettingsNavbarIconHover from "../../assets/images/SettingsNavbarIconHover.png";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav>
        <Link to="/">
          <img className="logo" src={Logo} alt="monoleak-logo" />
        </Link>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <img
                className="offHover"
                src={DashBoardIcon}
                alt="dashboard-icon"
              />
              {/* <img
                className="onHover"
                src={DashBoardNavbarIconHover}
                alt="dashboard-icon-hover"
              /> */}
              <p>Tổng quan</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <img
                className="offHover"
                src={TransactionIcon}
                alt="transaction-icon"
              />
              {/* <img
                className="onHover"
                src={TransactionsNavbarIconHover}
                alt="dashboard-icon-hover"
              /> */}

              <p>Giao dịch</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <img className="offHover" src={SettingIcon} alt="setting-icon" />
              {/* <img
                className="onHover"
                src={SettingsNavbarIconHover}
                alt="setting-icon-hover"
              /> */}

              <p>Cài đặt</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
