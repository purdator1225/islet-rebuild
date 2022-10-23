import "./navbar.styles.scss";

import { useState } from "react";

import { Fragment } from "react";

import { ReactComponent as IsletLogo } from "../../assets/Isletlogo.svg";

import MenuButton from "../../components/menu-icon/menu-icon";

import SubMenu from "../../components/submenu/submenu.component";

import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
        {isMenuOpen && <SubMenu />}
      <div className="navbar-container">
      
        <div className="navbar-links">
          <Link to="/" className="logo-wrapper">
            <IsletLogo />
          </Link>
          <div onClick={toggleMenuOpen}>
            <MenuButton />
          
          </div>
          
        </div>
     
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
