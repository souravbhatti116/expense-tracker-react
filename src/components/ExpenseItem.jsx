import React from 'react'
import "../style/ExpenseItem.css"

import Date from '../UI/Date'


const ExpenseItem = ({ date, title , price}) => {
  return (
   
        <div className="expenseItem">
            <Date dateObject = {date} />
            <div className="expenseItem-Details">
                <h2 className="expenseItem-Details__Title">{title}</h2>
                <div className="expenseItem-Details__Amount">${price}</div>
            </div>

        </div>
    
  )
}

export default ExpenseItem
