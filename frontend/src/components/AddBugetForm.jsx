import { Form } from "react-router-dom"

const AddBugetForm = () => {
  return (
    <div className="form-wrapper">
        <h2 className="h3">
            Create budget
        </h2>
        <Form
        method="post"
        className="grid-sm"
        >
            <div className="grid-xs">
                <label htmlFor="newBudget">Budget Name</label>
                <input 
                type="text" 
                name="newBudget" 
                id="newBudget"
                placeholder="e.g, Groceries"
                required
                 />
            </div>
            <div className="grid-xs">
                <label htmlFor="newBudgetAmount">Amount</label>
                <input 
                type="text"
                step="0.01"
                name="newBudgetAmount"
                id="newBudgetAmount"
                placeholder="e.g., $350"
                required
                inputMode="decimal"
                 />
            </div>

        </Form>
      
    </div>
  )
}

export default AddBugetForm
