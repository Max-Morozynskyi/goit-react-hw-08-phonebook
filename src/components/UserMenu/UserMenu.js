import { Button } from "@mui/material";
import { useAuth } from "hooks"
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (<div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
    <p>Hello, {user.name}</p>
    <Button
      color="inherit"
      variant="outlined"
      onClick={() => { dispatch(logout()) }}
    >Logout</Button>
  </div>)
}