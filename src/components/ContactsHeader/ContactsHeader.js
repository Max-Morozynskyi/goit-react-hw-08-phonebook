import { useState } from "react";
import { useAuth } from "hooks";
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ContactForm } from "components/ContactForm/ContactForm";

export const ContactsHeader = () => {
  const { user } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openPopover = Boolean(anchorEl);
  const idPopover = openPopover ? 'simple-popover' : undefined;

  return (
    <div style={{ display: 'flex', margin: '0 30px' }}>
      <h2>Your personal contacts, {user.name}:</h2>
      <IconButton style={{
        position: 'fixed',
        right: '50%',
        transform: 'translateX(250px)',
      }} aria-describedby={idPopover} onClick={handleClick}>
        <AddCircleOutlineIcon fontSize='large' />
      </IconButton>
      <Popover
        id={idPopover}
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{ sx: { backgroundColor: "transparent" } }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ContactForm closingFunc={setAnchorEl} />
      </Popover>
    </div>)
}