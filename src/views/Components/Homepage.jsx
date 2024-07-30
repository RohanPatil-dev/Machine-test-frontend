import React from "react"

import Footer from "../Header & Footer/Footer";
import "../../CSS/homepage.css"
import { Link } from "react-router-dom"

export default function Homepage() {
  return (
    <>
      <div className="container homepage">
        <img src="/Images/signin_and_signup/avataranimation.gif" alt="Image Not Found !" style={{ height: "300px" }} />

        <div className="home-text">
          <h1>Hey Admin</h1>
          <h2>Welcome to our app</h2>

          <div>
            <p>Lets start with a quick product tour and we will have</p>
            <p>you up and running in no time !</p>
          </div>

          <Link to="/createEmployee" className="btn btn-color">Get Started</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}