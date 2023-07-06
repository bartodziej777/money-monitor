import { NavLink } from "react-router-dom";
import { HiHome, HiCalendar, HiWallet, HiUser } from "react-icons/hi2";
import { MobileNavigation as StyledNavigation } from "./styles/Navigation.style";

export default function MobileNavigation() {
  return (
    <StyledNavigation>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#ff2e85" : "",
        })}
      >
        <HiHome />
      </NavLink>
      <NavLink
        to="/calendar"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#ff2e85" : "",
        })}
      >
        <HiCalendar />
      </NavLink>
      <NavLink
        to="/transactions"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#ff2e85" : "",
        })}
      >
        <HiWallet />
      </NavLink>
      <NavLink
        to="/me"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#ff2e85" : "",
        })}
      >
        <HiUser />
      </NavLink>
    </StyledNavigation>
  );
}
