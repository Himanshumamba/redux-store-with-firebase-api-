import React from 'react';
import { Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../store/Ui-slice';
const Notification = ({ type, message }) => {
  const dispatch = useDispatch();

  const notifyopen = useSelector((state) => state.ui.notification);
  const handleClose = () => {
    dispatch(
      uiAction.showNotification({
        open: false,
      })
    );
  };
  return (
    <div>
      {notifyopen.open && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
