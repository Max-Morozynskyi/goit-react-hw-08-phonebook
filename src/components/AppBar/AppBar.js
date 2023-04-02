import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks"
import css from './AppBar.module.css'
import { Link } from "react-router-dom";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const path = isLoggedIn ? '/contacts' : '/'
  return (
    <header className={css.header}>
      <Link to={path}>
        <h1>Phonebook</h1>
      </Link>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}