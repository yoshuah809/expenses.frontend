import { ActionCreators } from "../app/expensesReducer";

export const GetExpenses = async dispatch => {
  try {
    //Make Api Call
    const expenses = [
      { id: 1, description: "Groceries", amount: 23.25 },
      { id: 2, description: "Gas", amount: 25.25 },
      { id: 3, description: "Diner", amount: 13.55 },
    ];

    dispatch(ActionCreators.setExpenses(expenses));
  } catch (error) {
    console.log(error);
  }
};
