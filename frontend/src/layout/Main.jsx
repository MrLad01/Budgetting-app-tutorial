// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

// assets
import wave from "../assets/wave.svg"

// helpers function
import { fetchData } from "../helpers"
import Nav from "../components/Nav";

export function mainLoader(){
    const userName = fetchData("userName");
    return { userName }
}
 
const Main = () => {
   const { userName } = useLoaderData()
  return (
    <div className="layout">
     <Nav />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  )
}

export default Main
