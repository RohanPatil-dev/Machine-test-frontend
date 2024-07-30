import React from "react"
import { Link } from "react-router-dom"
import Footer from "../Header & Footer/Footer";
export default function Error() {
  return (
    <>
      <div className="Error">
        <Link to="/homepage" className="btn btn-danger">Go to Homepage</Link>
      </div>

      <Footer/>
    </>

  )
}