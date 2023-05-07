import { Link, useRouteError } from "react-router-dom"

import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Error = () => {
  const error = useRouteError()
  console.log(error);
  return (
    <div className="error">
      <h1>Uh oh! We've got a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark">
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link
         to="/"
         className="btn btn--dark"
        >
          <HomeIcon width={20} />
          <span>Go home</span>
        </Link>
      </div>
    </div>
  )
}

export default Error
