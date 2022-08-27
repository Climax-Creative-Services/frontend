import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menuToggle = () => {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  };
  return (
    <div className="main">
      <div className="fistNavbar">
        <p className="iconText">CLIMAX</p>
        <div className="navbarList">
          <ul className="navbarMenu">
            <li className="link-line">Learn</li>
            <li className="link-line">Hub</li>
            <li className="link-line">Market</li>
            <li className="link-line">Learn</li>
          </ul>
        </div>
        <form className="search-container">
          <label htmlFor="search-box">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik03Mi41NjI1LDI0LjE4NzVjLTI2LjY3MzQ0LDAgLTQ4LjM3NSwyMS43MDE1NiAtNDguMzc1LDQ4LjM3NWMwLDI2LjY3MzQ0IDIxLjcwMTU2LDQ4LjM3NSA0OC4zNzUsNDguMzc1YzExLjA5NzI2LDAgMjEuMzAxOTMsLTMuNzk2NDUgMjkuNDczMjcsLTEwLjEwNDM3bDM1LjE1Nzk2LDM1LjE1Nzk2YzIuNDI5NSwyLjQyOTUgNi4zNjc4NiwyLjQyOTUgOC43OTczNiwwYzIuNDI5NSwtMi40Mjk1IDIuNDI5NSwtNi4zNjc4NiAwLC04Ljc5NzM2bC0zNS4xNTc5NiwtMzUuMTU3OTZjNi4zMDc5MiwtOC4xNzEzNCAxMC4xMDQzNywtMTguMzc2MDEgMTAuMTA0MzcsLTI5LjQ3MzI3YzAsLTI2LjY3MzQ0IC0yMS43MDE1NiwtNDguMzc1IC00OC4zNzUsLTQ4LjM3NXpNNzIuNTYyNSwzNC45Mzc1YzIwLjc0NDgxLDAgMzcuNjI1LDE2Ljg4MDE5IDM3LjYyNSwzNy42MjVjMCwyMC43NDQ4MSAtMTYuODgwMTksMzcuNjI1IC0zNy42MjUsMzcuNjI1Yy0yMC43NDQ4MSwwIC0zNy42MjUsLTE2Ljg4MDE5IC0zNy42MjUsLTM3LjYyNWMwLC0yMC43NDQ4MSAxNi44ODAxOSwtMzcuNjI1IDM3LjYyNSwtMzcuNjI1eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
              alt="search"
              about="search"
              className="searchIcon"
            />
          </label>
          <input
            id="search-box"
            placeholder="Search..."
            type="text"
            className="search-box"
            name="search"
          />
          <input type="submit" id="search-submit" />
        </form>

        <div className="userProfile">
          <div className="action">
            <div className="profile" onClick={menuToggle}>
              <img
                src="https://pbs.twimg.com/profile_images/1503410280642064386/gfH8F4HQ_400x400.jpg"
                alt="profile"
              />
            </div>
            <div className="menu">
              <h3>Ekin Köseoğlu</h3>
              <span>Website Designer</span>
              <ul>
                <li>
                  <img src="icons/user-icon.png" /> <a href="#">My Profile</a>
                </li>
                <li>
                  <img src="icons/edit-icon.png" /> <a href="#">Edit</a>
                </li>{" "}
                <li>
                  <img src="icons/inbox-icon.png" /> <a href="#">Inbox</a>
                </li>{" "}
                <li>
                  <img src="icons/settings-icon.png" /> <a href="#">Settings</a>
                </li>{" "}
                <li>
                  <img src="icons/help-icon.png" /> <a href="#">Help</a>
                </li>
                <li>
                  <img src="icons/logout-icon.png" />
                  <NavLink to="/login">Logout</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
