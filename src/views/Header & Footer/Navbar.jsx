import React from "react"

// import CSS/login.css
import "../../CSS/navbar.css"
import { Outlet, Link, useNavigate } from "react-router-dom"

export default function Navbar() {

    const token = localStorage.getItem("uid")
    const navigate = useNavigate()

    function logout() {
        const logout = localStorage.removeItem("uid")

        navigate("/")
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Projectify</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {
                            !token ? (<>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Signin</Link>
                                </li>

                                <li className="nav-item active">
                                    <Link className="nav-link" to="/signup">Signup</Link>
                                </li>
                            </>) :
                                <>
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/homepage">Home</Link>
                                    </li>

                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/employeeList">Employee List</Link>
                                    </li>

                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/" onClick={() => { return logout() }}>Logout</Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    )
}