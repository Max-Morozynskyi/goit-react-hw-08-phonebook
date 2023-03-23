import { useAuth } from "hooks"

export const UserMenu = () => {
  const { user } = useAuth();
  return (<div>
    <p>Hello, {user.name}</p>
    <button>Logout</button>
  </div>)
}