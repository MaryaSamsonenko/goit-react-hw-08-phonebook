import { useSelector } from "react-redux";
import { authSelectors } from "../../../redux/auth/authSelectors";
import { NavContactsLinkStyled } from "./ContactsNav.styled";

export const ContactsNav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      {isLoggedIn ? (
        <NavContactsLinkStyled to="/contacts">
          My contacts
        </NavContactsLinkStyled>
      ) : (
        <NavContactsLinkStyled to="/">Home</NavContactsLinkStyled>
      )}
    </nav>
  );
};
