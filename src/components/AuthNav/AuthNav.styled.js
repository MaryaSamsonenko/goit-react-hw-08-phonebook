import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AuthNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const AuthNavItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  outline: none;
  text-decoration: none;
  padding: 6px 12px;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  color: grey;
  border-radius: 12px 4px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgb(82, 81, 81);
    color: rgb(245, 235, 142);
  }
`;
