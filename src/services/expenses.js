import axios from "axios";
import { ActionCreators } from "../app/expensesReducer";

const axiosInstance = axios.create({
  baseURL: "https://localhost:44364/Expenses",
});

export const GetExpenses = async dispatch => {
  try {
    //Make Api Call
    const { data } = await axiosInstance.get();

    dispatch(ActionCreators.setExpenses(data));
  } catch (error) {
    console.log(error);
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    //Make Api Call
    const { data } = await axiosInstance.post("", expense);
    dispatch(ActionCreators.newExpense(data));
  } catch (error) {
    console.log(error);
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    //Make Api Call
    await axiosInstance.put("", expense);
    dispatch(ActionCreators.editExpense(expense));
  } catch (error) {
    console.log(error);
  }
};

export const DeleteExpense = async (dispatch, expense) => {
  try {
    //Make Api Call
    await axiosInstance.delete("", { data: { ...expense } });
    dispatch(ActionCreators.deleteExpense(expense));
  } catch (error) {
    console.log(error);
  }
};
