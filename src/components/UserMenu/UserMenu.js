import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth/authSelectors";
import { authOperations } from "../../redux/auth/authOperations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <div>Welcome {name}</div>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
};
