import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const AppCopyright = (props) => {
  return (
    <footer>
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Phonebook
        </Link>{' '}
        {new Date().getFullYear()}
        {'. Created by '}
        <Link color="inherit" href="https://github.com/Max-Morozynskyi">
          Max Morozynskyi
        </Link>
      </Typography>
    </footer>
  );
}