import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <NavLink to="/">Phonebook</NavLink>
      <NavLink>Redister</NavLink>
      <NavLink>Login</NavLink>
    </header>
  );
};
