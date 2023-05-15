import { NoSymbolIcon, PlusCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom"
import { calculateSpentByBudget } from "../helpers";

const AddExpenseForm = ({ budgets, showForm = true}) => {

    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting"
   
    const formRef = useRef();
    const focusRef = useRef();

    useEffect(() => {
        if(!isSubmitting){
            formRef.current.reset()
            focusRef.current.focus()
        }
    }, [isSubmitting])

  return (
    <div className="form--wrapper">
      <h2 className="h3">Add New <span className="accent">
        {budgets.length === 1 && `${budgets.map((budg) => budg.name )}`}
        </span>{" "}
        Expenses
        </h2>
        <fetcher.Form
        method="post"
        className="grid-sm"
        ref={formRef}
        >
            <div className="expense-inputs">
                <div className="grid-xs">
                    <label htmlFor="newExpense">Expense Name</label>
                    <input 
                    type="text"
                    id="newExpense"
                    name="newExpense"
                    placeholder="e.g., Coffee"
                    ref={focusRef}
                    required
                     />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newExpenseAmount">Amount</label>
                    <input 
                    type="number"
                    step="0.01"
                    inputMode="decimal"
                    id="newExpenseAmount"
                    name="newExpenseAmount"
                    placeholder="e.g., NGN 3.50"
                    required
                     />
                </div>
            </div> 
            <div className="grid-xs" hidden={budgets.length === 1}>
                    <label htmlFor="newExpenseBudget">Budget Category</label> 
                    <select name="newExpenseBudget" id="newExpenseBudget" required>
                    {  
                        budgets
                        .sort((a, b) => a.createdAt - b.createdAt)
                        .map((budget) => {
                            const {id, amount} = budget 
                            const spent = calculateSpentByBudget(id);
                            return (
                                <>
                                        { spent !== amount && spent < amount &&
                                            <>
                                                    <option key={budget.id} value={budget.id}>
                                                        {budget.name}
                                                    </option>
                                            </>
                                        }
                                    </>
                                )
                            })
                        }
                        </select>
            </div>
            <input type="hidden" name="_action" value="createExpense"  />
            <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                {
                    isSubmitting ? <span>Submitting... </span> :
                    (
                        <>
                            <span>Add Expense </span>
                            <PlusCircleIcon width={20} />
                        </>
                    )
                }
                
            </button>
        </fetcher.Form>
    </div>
  )
}

export default AddExpenseForm
