import { toast } from "react-toastify";
import {
  newExpense,
  editExpense,
  deleteExpense,
  setExpenses,
} from "../app/expensesSlice";
const ToastMiddleware = () => next => action => {
  switch (action.type) {
    case newExpense.type:
      toast.success("New Expense added successfully");
      break;
    case editExpense.type:
      toast.success("New Expense edited successfully");
      break;
    case deleteExpense.type:
      toast.success(" Expense has been deleted successfully");
      break;
    case setExpenses.type:
      toast.success(" Expense has been Loaded successfully");
      break;
    default:
      break;
  }
  return next(action);
};

export default ToastMiddleware;
