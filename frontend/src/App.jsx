import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Routes
import Dashboard, { dashboardLoader } from "../pages/dashboard"
import Main, { mainLoader } from "./layout/Main"
import Error from "../pages/Error"
import { logoutAction } from "./actions/logout"


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
      },
      {
        path: "/logout",
        action: logoutAction
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
