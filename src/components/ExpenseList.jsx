import { useEffect, React, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../services/expenses";
import expensesSlice from "../services/expensesSlice";
import { ExpenseForm } from "./expenseForm";

export const ExpenseList = () => {
  const dispatch = useDispatch();
  //const expenses = useSelector(state => state.expensesReducer.expenses);
  const expenses = useSelector(state => state.expensesSlice.expenses);

  useEffect(() => {
    GetExpenses(dispatch);
  }, []);

  return expenses.map(e => (
    <div key={e.id} styles={{ marginBottom: "1rem" }}>
      <ListRow expense={e} />
    </div>
  ));
};

const ListRow = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false);
  return isEditing ? (
    <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
  ) : (
    <div>
      <Row>
        <Col>{expense.description}</Col>
        <Col>${expense.amount}</Col>
        <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>
          Edit
        </Button>
      </Row>
      <hr />
    </div>
  );
};
