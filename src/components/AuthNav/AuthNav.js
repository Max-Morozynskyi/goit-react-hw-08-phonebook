import { NavLink } from "react-router-dom"
import css from './AuthNav.module.css'

export const AuthNav = () => {
  return (
    <nav>
      <NavLink className={css.navLink} to="/register">Registration</NavLink>
      <NavLink className={css.navLink} to="/login">Login</NavLink>
    </nav>
  )
}