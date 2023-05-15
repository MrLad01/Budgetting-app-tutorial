import { Form, Link } from "react-router-dom";
import { calculateSpentByBudget, formatCurrency, formatPercentage } from "../helpers"
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { toast } from "react-toastify";

const BudgetsItem = ({budget, showDelete = false}) => {

    const {id, name, amount, color} = budget
    const spent = calculateSpentByBudget(id);

  return (
    <div 
        className="budget"
        style={{
            "--accent": color
        }}
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent} >
        {/* percentage
        {formatPercentage( spent / amount )} */}
      </progress> 
        { spent >= (0.8 * amount) &&
         <p style={{textAlign: "right",  fontSize:"14px", marginTop: "-5px" }}> Warning: You are about exhausting your budget!!! </p> }      
  
      <div className="progress-text">
       
        <small>{formatCurrency(spent)}  spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </div>
      {
        showDelete ? (
            <div className="flex-sm">
                <Form 
                method="post"
                action="delete"
                onSubmit={(event) => {if(!confirm("Are you sure you want to permanently delete this budget?")){
                    event.preventDefault()
                }}}
                >
                   <button type="submit" className="btn">
                    <span>Delete Budget</span>
                    <TrashIcon width={20} />
                   </button>
                </Form>
            </div>
        ) : (
            <div className="flex-sm">
                <Link
                to={`/budget/${id}`}
                className="btn"
                >
                    <span>View Details</span>
                    <BanknotesIcon width={20} />
                </Link>
            </div>
        )
      }
    </div>
  )
}

export default BudgetsItem
