import React, { useState } from "react"

import "../../CSS/signin_and_signup.css"
import { Link } from "react-router-dom"

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import userController from "../../controller/user"
import { useNavigate } from "react-router-dom";

export default function Signin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignin(event) {
        event.preventDefault();
        try {
            const response = await userController.signin(username, password);

            return navigate("/homepage");
        } catch (error) {
            if (error.response && error.response.data) {
                return toast.error(error.response.data.err)
            }
        }
    }

    return (
        <>
            <ToastContainer />
            <div id="signin">
                <div className="container containers">
                    <div className="container-form">
                        <div className="title">Signin page</div>
                        <div className="forms">
                            <form onSubmit={handleSignin}>
                                <div className="input-box">
                                    <span className="icon"><ion-icon name="person"></ion-icon></span>
                                    <input type="text" value={username} onChange={(event) => { return setUsername(event.target.value) }} placeholder="Enter your username.........." />
                                </div>

                                <div className="input-box">
                                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                                    <input type="password" value={password} onChange={(event) => { return setPassword(event.target.value) }} placeholder="Enter your password.........." />
                                </div>

                                <p className="account">Don't have account ? <Link to="/signup">Please Signup</Link></p>

                                <button type="submit" className="btn btn-primary signin-button">Signin</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}