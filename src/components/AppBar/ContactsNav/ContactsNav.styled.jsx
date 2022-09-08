import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContactsLinkStyled = styled(NavLink)`
  outline: none;
  text-decoration: none;
  padding: 6px;
  font-size: 28px;
  font-weight: 600;
  line-height: 30px;
  color: grey;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: rgb(82, 81, 81);
  }
`;
