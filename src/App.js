import './App.css';
import '../src/style/Card.css'
import { useState } from 'react';
import './components/ExpenseItem'
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense';
import Card from './components/Card';

function App() {
  const [listOfExpense, setListOfExpense] = useState([]);




  const addExpenseHandler = (expense)=>{
    console.log(expense)
    setListOfExpense((prevExpense) => [ expense,...prevExpense])
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <Card>
          <NewExpense onAddExpenseHandler = {addExpenseHandler} />
          <ul>
            {listOfExpense.map((expense) => {
              return <li key={Math.random().toString()}>
                        <ExpenseItem title={expense.enteredTitle} price={expense.enteredAmount} date={expense.enteredDate} />
                    </li>
            })
            }
          </ul>
        </Card>
      </header>
    </div>
  );
}

export default App;
