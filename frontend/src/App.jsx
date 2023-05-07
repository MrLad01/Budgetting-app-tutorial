import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Routes
import Dashboard, { dashboardLoader } from "../pages/dashboard"
import Main, { mainLoader } from "./layout/Main"
import Error from "../pages/Error"


const router = createBrowserRouter([
  {
    path:"/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />
      }
    ]
  },
]);


function App() {
  return <div className="App">
      <RouterProvider router={router} />
    </div>;
}

export default App
