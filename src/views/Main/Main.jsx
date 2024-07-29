import React from "react"

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "../Header & Footer/Navbar"
import Signin from "../Signin & Signup/Signin"
import Signup from "../Signin & Signup/Signup"
import Homepage from "../Components/Homepage"
import Employee from "../Components/Employee"
import Employee_list from "../Components/Employee_list"
import UpdateData from "../Components/UpdateData"
import Error from "../Components/Error"

export default function Main() {
  return(
    <>
        <BrowserRouter>
             <Routes>
                  <Route path="/" element={<Navbar />}>
                        <Route path="/" element={<Signin />}/>
                        <Route path="/signup" element={<Signup />}/>
                        <Route path="/homepage" element={<Homepage />}/>
                        <Route path="/createEmployee" element={<Employee />}/>
                        <Route path="/employeeList" element={<Employee_list />}/>
                        <Route path="/updateEmployee/:id" element={<UpdateData />}/>
                        <Route path="*" element={<Error />}/>
                  </Route>
             </Routes>
        </BrowserRouter>
    </>
  )
}