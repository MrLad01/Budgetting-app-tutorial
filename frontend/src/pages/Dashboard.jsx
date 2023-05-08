// rrd imports
import { useLoaderData } from "react-router-dom";

// helpers function
import { createBudget, fetchData, waait } from "../helpers"
import { toast } from "react-toastify";

// copmonents
import Intro from "../components/Intro";
import AddBugetForm from "../components/AddBugetForm";
import AddExpenseForm from "../components/AddExpenseForm";

export function dashboardLoader(){
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    return { userName, budgets }
}

// action
export async function dashboardAction({request}){
  const data = await request.formData();
  // const userName = data.get("userName")
  // console.log(userName);
  const {_action, ...values} = Object.fromEntries(data)
  if (_action === "newUser"){
      try{      
        localStorage.setItem("userName", JSON.stringify(values.userName))
        return toast.success(`Welcome, ${values.userName}`)
      }
      catch(e){
        throw new Error("There was a problem creating your account.")
      }
  }
  if(_action === "createBudget"){
    try{
      await waait();
      createBudget({name: values.newBudget, amount:values.newBudgetAmount})
      return toast.success("Budget created!")
    } catch(e){
      throw new Error("There was a problem creating your budget.")
    }
  }
}

const Dashboard = () => { 
   const { userName, budgets } = useLoaderData()
  return (
    <>
      { userName  ? (
          <div className="dashboard">
            <h1>Welcome back, <span className="accent">{userName}</span></h1>
            <div className="grid-sm">
              {
                budgets && budgets.length > 0 ?
                (  
                  <div className="grid-lg">
                     <div className="flex-lg">
                       <AddBugetForm />
                       <AddExpenseForm  budgets={budgets} />
                     </div>
                   </div>
                 ) : 
                (  
                  <div className="grid-sm">
                     <p>Personal budgetting is the secret to financial freedom.</p>
                     <p>Create a budget to get started!</p>
                      <AddBugetForm />
                   </div>
                 )  
              }
            </div>
          </div>
      ) : <Intro /> }
    
    </>
  )
}

export default Dashboard
