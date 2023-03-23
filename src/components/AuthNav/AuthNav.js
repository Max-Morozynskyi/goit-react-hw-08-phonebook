import { NavLink } from "react-router-dom"

export const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </nav>
  )
}