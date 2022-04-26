import { configureStore } from '@reduxjs/toolkit';
import expensesSlice from "../services/expensesSlice";
import expensesReducer from "./expensesReducer";


export default configureStore({
  reducer: {
    expensesSlice: expensesSlice,
  },
});
