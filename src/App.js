/** @format */
import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    title: "Soda",
    amount: 12.99,
    date: new Date(2020, 12, 21),
    key: Math.random() * 1000,
  },
  {
    title: "Flour",
    amount: 13.99,
    date: new Date(2020, 11, 13),
    key: Math.random() * 1000,
  },
  {
    title: "BakingSoda",
    amount: 14.99,
    date: new Date(2020, 5, 12),
    key: Math.random() * 1000,
  },
  {
    title: "Car Volvo",
    amount: 15000,
    date: new Date(2019, 5, 12),
    key: Math.random() * 1000,
  },
  {
    title: "Bike Scott",
    amount: 1500,
    date: new Date(2019, 4, 12),
    key: Math.random() * 1000,
  },
];
function App() {
  const [expenses, SetExpenses] = useState(DUMMY_EXPENSES);
  function onAddExpense(newExpense) {
    SetExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  }

  return (
    <div className='App'>
      <NewExpense onAddExpense={onAddExpense}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
