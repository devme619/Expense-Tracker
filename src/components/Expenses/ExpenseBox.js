import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseBox.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function ExpenseBox(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenseBox">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        {props.item.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default ExpenseBox;
