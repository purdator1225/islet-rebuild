import "./submenu.styles.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: Black;
  text-decoration: none;
  position: relative;
  &:hover {
    text-decoration: underline;
  }
`;

const SubMenu = () => {
  return (
    <div className="submenu-wrapper">
      <div className="submenu-items-wrapper">
        <StyledLink to='/our-work'>Our Work</StyledLink>
        <StyledLink to='/about-us'>About Us</StyledLink>
        <StyledLink to='/contact-us'>Contact Us</StyledLink>
        <StyledLink to='/case-studies'>Case Studies</StyledLink>
      </div>
    </div>
  );
};

export default SubMenu;
