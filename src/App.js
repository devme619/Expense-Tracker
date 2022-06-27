
import React from 'react';
import ExpenseBox from './components/Expenses/ExpenseBox';
function App() {
  const expenses = [
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
  return (
    <div>
      <ExpenseBox item={expenses}/>
    </div>
  );
  // for the above code in
}

export default App;
