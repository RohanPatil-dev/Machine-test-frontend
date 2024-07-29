import React from "react"
import { Link } from "react-router-dom"

export default function Error() {
  return (
    <div className="Error">
      <Link to="/homepage" className="btn btn-danger">Go to Homepage</Link>
    </div>
  )
}