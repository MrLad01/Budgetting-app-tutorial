import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Routes
import Dashboard, { dashboardLoader } from "../pages/dashboard"
import Main from "./layout/Main"
import Error from "../pages/Error"

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Main />,
      loader: mainLoader,
      errorElement: <Error />,
      children: {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />
      }
    }
  ]
  )

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
