// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

// helpers function
import { fetchData } from "../helpers"

export function mainLoader(){
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {
   const { userName } = useLoaderData()
  return (
    <div>
      <h1>{ userName }</h1>
      <h2>Main</h2>
      <Outlet />
    </div>
  )
}

export default Main
