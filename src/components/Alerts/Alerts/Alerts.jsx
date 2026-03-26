import AlertError from '../AlertError/AlertError';
import AlertSucesso from '../AlertSucesso/AlertSucesso';
export default function Alerts({
  openAlertSuccess,
  messageSuccess,
  closeAlerts,
  openAlertError,
  messageError,
  duration,
}) {
  return (
    <>
      <AlertSucesso
        openAlert={openAlertSuccess}
        handleCloseAlert={closeAlerts}
        message={messageSuccess}
        duration={duration}
      />

      <AlertError
        openAlert={openAlertError}
        handleCloseAlert={closeAlerts}
        message={messageError}
        duration={duration}
      />
    </>
  );
}
