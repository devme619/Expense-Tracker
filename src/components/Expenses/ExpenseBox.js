import ExpenseItem from './ExpenseItem';
import './ExpenseBox.css'
import Card from '../UI/Card';
function ExpenseBox(props) {
    return(
  <Card className='expenseBox'>
    <ExpenseItem
      title={props.item[0].title}
      amount={props.item[0].amount}
      date={props.item[0].date}
    ></ExpenseItem>
    <ExpenseItem
      title={props.item[1].title}
      amount={props.item[1].amount}
      date={props.item[1].date}
    ></ExpenseItem>
    <ExpenseItem
      title={props.item[2].title}
      amount={props.item[2].amount}
      date={props.item[2].date}
    ></ExpenseItem>
  </Card>
    );
}
export default ExpenseBox;