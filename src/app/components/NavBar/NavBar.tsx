import { NavLink } from "react-router-dom";
import * as NavBarWrapper from "./NavBar.styles";

export default function NavBar () {
  return <>
    <NavBarWrapper.List>
      <NavBarWrapper.Item><NavLink to="/">início</NavLink></NavBarWrapper.Item>
      <NavBarWrapper.Item><NavLink to="/editores">editores</NavLink></NavBarWrapper.Item>
      <NavBarWrapper.Item><NavLink to="/post/criar">novo post</NavLink></NavBarWrapper.Item>
    </NavBarWrapper.List>
  </>
}
