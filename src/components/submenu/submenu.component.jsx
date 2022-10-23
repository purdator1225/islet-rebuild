import "./submenu.styles.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledLink = styled(Link)`
  color: Black;
  text-decoration: none;
  position: relative;
  &:hover{
    text-decoration: underline
  }
`;



const SubMenu = () => {
  return (
    <div className="submenu-wrapper">
      <div className="submenu-items-wrapper">
        <StyledLink>Our Work</StyledLink>
        <StyledLink>About Us</StyledLink>
        <StyledLink>Contact Us</StyledLink>
        <StyledLink>Case Studies</StyledLink>
      </div>
    </div>
  );
};

export default SubMenu;
