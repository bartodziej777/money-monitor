import { NavLink } from "react-router-dom";
import {
  SideNavigation as StyledNavigation,
  SideContainer as StyledContainer,
  Bar as StyledBar,
} from "./styles/Navigation.style";
import {
  HiHome,
  HiCalendar,
  HiWallet,
  HiUser,
  HiWrenchScrewdriver,
} from "react-icons/hi2";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import "./styles/Navigation.style.css";

export default function SideNavigation() {
  const { user } = useSelector((state: RootState) => state);

  return (
    <StyledContainer>
      <div>
        <div></div>
        <p>
          Hello,{" "}
          <span>
            {user.displayName
              ? user.displayName
              : user.email?.slice(0, user.email.indexOf("@"))}
          </span>
        </p>
      </div>
      <StyledBar />
      <h3>Managments:</h3>
      <StyledNavigation>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#eef1f6" : "",
          })}
        >
          <HiHome />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/calendar"
          style={({ isActive }) => ({
            color: isActive ? "#eef1f6" : "",
          })}
        >
          <HiCalendar />
          <span>Calendar</span>
        </NavLink>
        <NavLink
          to="/transactions"
          style={({ isActive }) => ({
            color: isActive ? "#eef1f6" : "",
          })}
        >
          <HiWallet />
          <span>Transactions</span>
        </NavLink>
        <NavLink
          to="/me"
          style={({ isActive }) => ({
            color: isActive ? "#eef1f6" : "",
          })}
        >
          <HiUser />
          <span>Account</span>
        </NavLink>
      </StyledNavigation>
      <h3>Others:</h3>
      <StyledNavigation>
        <NavLink
          to="/settings"
          style={({ isActive }) => ({
            color: isActive ? "#eef1f6" : "",
          })}
        >
          <HiWrenchScrewdriver />
          <span>settings</span>
        </NavLink>
      </StyledNavigation>
      <button>Sign out</button>
      <p>budgetTracker 2023 &copy;</p>
    </StyledContainer>
  );
}
