import React,{useState} from "react"


import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import userController from "../../controller/user"
import { useNavigate } from "react-router-dom";

import "../../CSS/signin_and_signup.css"

export default function Signup() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    console.log(username,"",password);

  const navigate = useNavigate();

  async function handleSignup(event) {
       event.preventDefault();

       try {
           const response = await userController.signup(username, password);
               
              return navigate("/");
       } catch (error) {
           if (error.response && error.response.data) {
                return toast.error(error.response.data.err)
           } 
       }
  }


  return (
    <>
    <ToastContainer/>
            <div id="signup">
            <div className="container containers">
                <div className="container-form">
                    <div className="title">Signup page</div>
                    <div className="forms">
                        <form onSubmit={handleSignup}>
                            <div className="input-box">
                                <span className="icon"><ion-icon name="person"></ion-icon></span>
                                <input type="text" value={username} onChange={(event)=>{return setUsername(event.target.value)}} placeholder="Enter your username.........." />
                            </div>

                            <div className="input-box">
                                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                                <input type="password" value={password} onChange={(event)=>{return setPassword(event.target.value)}} placeholder="Enter your password.........." />
                            </div>

                            <button type="submit" className="btn btn-primary signup-btn">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}