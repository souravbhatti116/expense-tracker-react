import React from 'react'
import "../style/date.css"

const Date = ({dateObject}) => {
    
    const month = dateObject.toLocaleString('en-US', { month: 'long' });
    const year = dateObject.getFullYear();
    const day = dateObject.getDate();
  return (
            <div className="Date">
                <div className="Date__Month">{month}</div>
                <div className="Date__Year">{year}</div>
                <div className="Date__Day">{day}</div>
            </div>  
        )
}

export default Date