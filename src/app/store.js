import { configureStore } from '@reduxjs/toolkit';

import expensesReducer from "./expensesReducer";
import ToastMiddleware from "../middlewares/ToastMiddleware";
import expensesSlice from "./expensesSlice";

export default configureStore({
  reducer: {
    expensesSlice: expensesSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(ToastMiddleware),
});
