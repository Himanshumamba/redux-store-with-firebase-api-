import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Auth from './components/Auth';
import Layout from './components/Layout';
import { useEffect } from 'react';
import Notification from './components/Notification';
import { uiAction } from './store/Ui-slice';
let isFirstRender = true;
function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notify = useSelector((state) => state.ui.notification);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    if (isFirstRender) {
    }
    const sendRequest = async () => {
      dispatch(
        uiAction.showNotification({
          open: true,
          message: 'Sending request succesfully',
          type: 'warning',
        })
      );
      const resp = await fetch(
        'https://reduxhttp-74d61-default-rtdb.firebaseio.com/cartItem.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      const data = await resp.json();
      dispatch(
        uiAction.showNotification({
          open: true,
          message: 'Sending request to database FIrebase succesfully',
          type: 'success',
        })
      );
    };
    sendRequest().catch((err) => {
      dispatch(
        uiAction.showNotification({
          open: true,
          message: 'Sending request failed',
          type: 'error',
        })
      );
    });
  }, [cart]);

  console.log(isLoggedIn);
  return (
    <div className="App">
      {notify && <Notification type={notify.type} message={notify.message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
