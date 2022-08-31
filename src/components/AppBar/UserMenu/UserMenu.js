import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../../../redux/auth/authSelectors";
import { authOperations } from "../../../redux/auth/authOperations";
import { UserMenuWrapper, UserName, LogOutButton } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <UserMenuWrapper>
      <UserName>Welcome, {name}</UserName>
      <LogOutButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </LogOutButton>
    </UserMenuWrapper>
  );
};
