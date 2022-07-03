
import React,{ useState } from 'react';
import ExpenseBox from './components/Expenses/ExpenseBox';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
const dummyExpenses = [

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
