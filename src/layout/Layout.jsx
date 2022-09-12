import { useSelector } from "react-redux";
import { ContactsNav } from "./common/ContactsNav/ContactsNav";
import { UserMenu } from "./common/UserMenu/UserMenu";
import { AuthNav } from "./common/AuthNav/AuthNav";
import { AppBarStyled } from "./Layout.styled";
import { authSelectors } from "../redux/auth/authSelectors";
import { Outlet } from "react-router-dom";
import { Container } from "../components/UI/Container.styled";

export const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <AppBarStyled>
        <ContactsNav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarStyled>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
