import { AuthNavList, AuthNavItem, NavLinkStyled } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <AuthNavList>
      <AuthNavItem>
        <NavLinkStyled to="/signup" exact="true">
          Register
        </NavLinkStyled>
      </AuthNavItem>
      <AuthNavItem>
        <NavLinkStyled to="/login" exact="true">
          Login
        </NavLinkStyled>
      </AuthNavItem>
    </AuthNavList>
  );
};
