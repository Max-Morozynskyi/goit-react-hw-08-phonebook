import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks"

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <h1>Phonebook</h1>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}