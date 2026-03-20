import { Snackbar, Alert } from '@mui/material';

export default function AlertError({ openAlert, handleCloseAlert, message }) {
  return (
    <Snackbar
      open={openAlert}
      autoHideDuration={1500}
      onClose={handleCloseAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={handleCloseAlert}
        severity="error"
        variant="filled"
        elevation={6}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
