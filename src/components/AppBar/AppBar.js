import { useSelector } from "react-redux";
import { ContactsNav } from "../ContactsNav/ContactsNav";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { authSelectors } from "../../redux/auth/authSelectors";

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <ContactsNav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
