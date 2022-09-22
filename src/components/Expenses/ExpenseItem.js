/** @format */
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item-container">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2>{props.title}</h2>
      <div className="amount-container">{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
