// rrd imports
import { useLoaderData } from "react-router-dom";

// helpers function
import { fetchData } from "../helpers"
import Intro from "../components/Intro";
import { toast } from "react-toastify";

export function dashboardLoader(){
    const userName = fetchData("userName");
    return { userName }
}

// action
export async function dashboardAction({request}){
  const data = await request.formData();
  // const userName = data.get("userName")
  // console.log(userName);
  const formData = Object.fromEntries(data)
  try{
    throw new Error("ya done")
    localStorage.setItem("userName", JSON.stringify(formData.userName))
    return toast.success(`Welcome, ${formData.userName}`)
  }
  catch(e){
    throw new Error("There was a problem creating your account.")
  }
}

const Dashboard = () => { 
   const { userName } = useLoaderData()
  return (
    <>
      { userName  ? (<p>{ userName }</p>) : <Intro /> }
    
    </>
  )
}

export default Dashboard
