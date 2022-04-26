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

export const NewExpense = async (dispatch, expense) => {
  try {
    //Make Api Call
    dispatch(
      ActionCreators.newExpense({
        id: 10,
        description: expense.description,
        amount: expense.amount,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    //Make Api Call
    dispatch(ActionCreators.editExpense(expense));
  } catch (error) {
    console.log(error);
  }
};

export const DeleteExpense = async (dispatch, expense) => {
  try {
    //Make Api Call
    dispatch(ActionCreators.deleteExpense(expense));
  } catch (error) {
    console.log(error);
  }
};
  