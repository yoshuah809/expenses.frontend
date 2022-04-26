import { ToastContainer } from "react-toastify";
import { ExpenseForm } from "./components/expenseForm";
import { ExpenseList } from "./components/ExpenseList";

const App = () => {
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <ToastContainer />
      <h3> New Expense</h3>
      <ExpenseForm />
      <hr styles={{ border: "1px solid gray" }} />
      <h3> Your Expenses</h3>
      <ExpenseList />
    </div>
  );
};

export default App;
