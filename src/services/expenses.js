import axios from "axios";
import {
  deleteExpense,
  editExpense,
  newExpense,
  setExpenses,
  setExpenseError,
  newExpenseError,
  deleteExpenseError,
  editExpenseError,
} from "../app/expensesSlice";
//import { ActionCreators } from "../app/expensesReducer";

const axiosInstance = axios.create({
  baseURL: "https://localhost:44364/Expenses",
});

export const GetExpenses = async dispatch => {
  try {
    //Make Api Call
    const { data } = await axiosInstance.get();

    dispatch(setExpenses(data));
  } catch {
    dispatch(setExpenseError());
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    //Make Api Call
    const { data } = await axiosInstance.post("", expense);
    dispatch(newExpense(data));
  } catch {
    dispatch(newExpenseError());
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    //Make Api Call
    await axiosInstance.put("", expense);
    dispatch(editExpense(expense));
  } catch {
    dispatch(editExpenseError());
  }
};

export const DeleteExpense = async (dispatch, expense) => {
  try {
    //Make Api Call
    await axiosInstance.delete("", { data: { ...expense } });
    dispatch(deleteExpense(expense));
  } catch {
    dispatch(deleteExpenseError());
  }
};
