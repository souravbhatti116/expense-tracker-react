import React, { useState } from 'react'
import '../style/ExpenseForm.css'
const ExpenseForm = ({onSaveExpenseData}) => {

    const[title, setTitle] = useState('')
    const[date, setDate] = useState('')
    const[amount, setAmount] = useState('')

    
    const submitHandler = (e) =>{
        e.preventDefault();
        const expensedata = {
            enteredTitle: title, 
            enteredAmount:amount, 
            enteredDate: new Date(date)
        };
        onSaveExpenseData(expensedata);
        setAmount('');
        setTitle('');
        setDate('')
    }

    const inputChangeHandler = (identifier, value) => {
        if (identifier ===  'title'){
            setTitle(value);
        }else if(identifier === 'amount'){
            setAmount(value);   
        }else{
            setDate(value);
        }
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className="newExpense__controls">
                <div className="newExpense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={(event)=>inputChangeHandler('title', event.target.value)} id="" value={title} placeholder='Enter Title Here'/>
                </div>

                <div className="newExpense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" onChange={(event)=>inputChangeHandler('amount', event.target.value)} value={amount} min={0.01} step={0.01} placeholder='Enter Amount Here'/>
                </div>

                <div className="newExpense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" onChange={(event)=>inputChangeHandler('date', event.target.value)} value={date} />
                </div>

                <div className="newExpense__control">
                    <label htmlFor="">  </label>
                    <button type="submit" > Add New Expense</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ExpenseForm