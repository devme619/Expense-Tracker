
import React,{ useState } from 'react';
import ExpenseBox from './components/Expenses/ExpenseBox';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
const dummyExpenses = [
  {
    title: "Car Insurance",
    amount: "300",
    date: new Date(2021,2,28),
  },
  {
    title: "Car Insurance",
    amount: "300",
    date: new Date(2021,2,28),
  },
  {
    title: "Car Insurance",
    amount: "300",
    date: new Date(2021,2,28),
  },
];
  const [expenses, setExpenses]= useState(dummyExpenses);
  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseBox item={expenses}/>
    </div>
  );
  // for the above code in
}

export default App;
