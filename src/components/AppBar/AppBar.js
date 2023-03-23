import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks"
import css from './AppBar.module.css'

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <h1>Phonebook</h1>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}