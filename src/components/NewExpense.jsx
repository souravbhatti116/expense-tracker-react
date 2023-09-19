import React from 'react'
import ExpenseForm from '../components/ExpenseForm'
import '../style/NewExpense.css'
const NewExpense = ({onAddExpenseHandler}) => {

    
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expensedata = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        onAddExpenseHandler(expensedata);
    }



  return (
    <div className='newExpense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;