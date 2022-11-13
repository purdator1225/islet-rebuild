import "./navbar.styles.scss";

import { useState, useContext } from "react";

import { Fragment } from "react";

import { ReactComponent as IsletLogo } from "../../assets/Isletlogo.svg";

import MenuButton from "../../components/menu-icon/menu-icon";

import SubMenu from "../../components/submenu/submenu.component";

import { motion, AnimatePresence } from "framer-motion";

import { Outlet, Link } from "react-router-dom";

import { NavContext } from "../../assets/contexts/navbar-context";

const Navbar = () => {

  const {isMenuOpen, setMenuOpen} = useContext(NavContext);

  const toggleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="animation-wrapper"
            // initial={{ }}
            animate={{ y: [-1000, 0] }}
            exit={{ y: [0, -1000] }}
          >
            <SubMenu />
          </motion.div>
        )}
      </AnimatePresence>

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
