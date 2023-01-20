import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import authSlice from './auth-slice';
import uiSlice from './Ui-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
