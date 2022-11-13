import "./submenu.styles.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useContext } from "react";
import { NavContext } from "../../assets/contexts/navbar-context";

const StyledLink = styled(Link)`
  color: Black;
  text-decoration: none;
  position: relative;
  &:hover {
    text-decoration: underline;
  }
`;

const linkVariants = {
  hover: {
    x: [10,-10],
    y:[0,-10],
    transition:{
      x:{
        yoyo: Infinity,
        duration:0.8
      },
      y:{
        yoyo:Infinity,
        duration:0.5
      }
    }

    }
  }

const SubMenu = () => {


  const{isMenuOpen, setMenuOpen} = useContext(NavContext)

  return (
    <div className="submenu-wrapper">
      <div className="submenu-items-wrapper">
        <StyledLink  to='/our-work'  onClick={()=>setMenuOpen(false)}>Our Work</StyledLink>
        <StyledLink  to='/about-us'  onClick={()=>setMenuOpen(false)}>About Us</StyledLink>
        <StyledLink  to='/contact-us'  onClick={()=>setMenuOpen(false)} >Contact Us</StyledLink>
        <StyledLink to='/case-studies' onClick={()=>setMenuOpen(false)}>Case Studies</StyledLink>
        <StyledLink to='/contact-us' onClick={()=>setMenuOpen(false)}>Case Studies</StyledLink>
      </div>
    </div>
  );
};

export default SubMenu;
