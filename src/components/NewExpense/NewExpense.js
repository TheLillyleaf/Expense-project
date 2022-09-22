/** @format */

import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";
import Card from "../UI/Card";
import "./NewExpense.css";
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function onSubmitHandler(enteredData) {
    const expenseData = {
      ...enteredData,
      id: Math.random(),
    };

    props.onAddExpense(expenseData);
    stopEditingHandler();
  }

  function startEditingHandler() {
    setIsEditing(true);
  }
  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <Card>
      <div className='newExpense'>
        {isEditing && (
          <NewExpenseForm
            onCancel={stopEditingHandler}
            onSubmitForm={onSubmitHandler}
          ></NewExpenseForm>
        )}

        {!isEditing && (
          <button
            className='addNewBtn'
            onClick={startEditingHandler}
          >
            Add new
          </button>
        )}
      </div>
    </Card>
  );
}

export default NewExpense;
