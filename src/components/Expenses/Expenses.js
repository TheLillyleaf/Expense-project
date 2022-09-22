/**
 * /* eslint-disable array-callback-return
 *
 * @format
 */

/** @format */

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

import { useState } from "react";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(year) {
    setFilteredYear(year);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  var expenses = filteredExpenses.map((expense) => {
    return (
      <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
        key={expense.key}
      />
    );
  });

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        filterChange={filterChangeHandler}
      ></ExpenseFilter>
      <ExpenseChart expenses={filteredExpenses} />
      {expenses}
    </Card>
  );
}

export default Expenses;
