// rrd imports
import { useLoaderData } from "react-router-dom";

// helpers function
import { fetchData } from "../src/helpers"

export function dashboardLoader(){
    const userName = fetchData("userName");
    return { userName }
}

const Dashboard = () => {
   const { userName } = useLoaderData()
  return (
    <div>
      <h1>{ userName }</h1>
      <h2>Dashboard</h2>
    </div>
  )
}

export default Dashboard
