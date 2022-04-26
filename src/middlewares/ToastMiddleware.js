import { toast } from "react-toastify";
import {
  newExpense,
  editExpense,
  deleteExpense,
  setExpenseError,
  editExpenseError,
  deleteExpenseError,
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
    case setExpenseError.type:
      toast.error("Error loading Expenses");
      break;
    case editExpenseError.type:
      toast.error("Error loading Expense");
      break;
    case deleteExpenseError.type:
      toast.error("Error loading Expense");
      break;
    default:
      break;
  }
  return next(action);
};

export default ToastMiddleware;
