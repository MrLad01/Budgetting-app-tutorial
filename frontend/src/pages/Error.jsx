import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  console.log(error);
  return (
    <div className="error">
      <h1>Uh oh! We've got a problem.</h1>
      <p>{error.message || error.statusText}</p>
    </div>
  )
}

export default Error
