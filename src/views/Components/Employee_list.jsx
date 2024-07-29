import React,{useState,useEffect} from "react"

import employeeController from "../../controller/employee"

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import "../../CSS/employee.css"

// for data table
import axios from "axios";
import Datatable from "./Datatable";

export default function Employee_list() {

  const token = localStorage.getItem("uid")

  const [emp, setEmp] = useState([])

  console.log(emp);

  useEffect(()=>{
    function renderAdminData() {
      try {
        axios.get("http://localhost:8081/employee/admin", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((value) => {
          console.log(value.data.allData);
          setEmp(value.data.adminData)
        })
      } catch (error) {
        toast.error(`Error is ${error}`)
      }
    }

    renderAdminData()

  },[emp])

  async function deleteEmployee(id) {
    try {
      const response = await employeeController.deleteEmp(id)

       toast.success(response.msg)
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.err);
    }
    }
  }

  return (
     <>
     <ToastContainer />
     <Datatable emp={emp} deleteEmployee={deleteEmployee}/>
     </>
  )
}