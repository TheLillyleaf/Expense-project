/** @format */
import "./NewExpenseForm.css";
import Card from "../UI/Card";
import { useState } from "react";

function NewExpenseForm(props) {
  const [enteredExpense, setEnteredExpense] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function expenseChangeHandler(event) {
    setEnteredExpense(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseDetails = {
      title: enteredExpense,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSubmitForm(expenseDetails);
    setEnteredExpense("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='.new-expense__controls'>
        <div className='new-expense__control '>
          <label>expense</label>
          <input
            type='text'
            value={enteredExpense}
            onChange={expenseChangeHandler}
          />
        </div>

        <div className='new-expense__control '>
          <label>amount</label>
          <input
            type='number'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className='new-expense__control '>
          <label>date</label>
          <input
            type='date'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button>submit</button>
        <button onClick={props.stopEditingHandler}>cancel</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
