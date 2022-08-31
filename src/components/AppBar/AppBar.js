import { useSelector } from "react-redux";
import { ContactsNav } from "./ContactsNav/ContactsNav";
import { UserMenu } from "./UserMenu/UserMenu";
import { AuthNav } from "./AuthNav/AuthNav";
import { AppBarStyled } from "./AppBar.styled";
import { authSelectors } from "../../redux/auth/authSelectors";

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBarStyled>
      <ContactsNav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarStyled>
  );
};
