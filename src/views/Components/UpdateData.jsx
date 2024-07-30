import React,{useEffect, useState} from "react"
import { Link,useParams } from "react-router-dom"

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import employeeController from "../../controller/employee"
import Footer from "../Header & Footer/Footer";

export default function UpdateData() {

    const { id } = useParams()

    const [data, setData] = useState({ name: "", email: "",contact : "",designation : "",gender : "",course : "",coverImage : ""})

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [designation, setDesignation] = useState("");
    const [gender, setGender] = useState("");
    const [course, setCourses] = useState("");
    const [coverImage, setCoverImage] = useState("")
    const [tempImage, setTempImage] = useState(null)
    console.log(coverImage);

    async function exchange(){
        return await setCoverImage(tempImage)
    }

    useEffect(() => {
        singleData()
        exchange()
      }, [id])

   async function singleData(){
    try {
        const response = await employeeController.singleEmp(id)

        const data = response.data
  
        setData(data)
        setName(data.name)
        setEmail(data.email)
        setContact(data.contact)
        setDesignation(data.designation)
        setGender(data.gender)
        setCourses(data.course)
        setCoverImage(data.coverImage)

         toast.success(response.msg)
      } catch (error) {
        if (error.response && error.response.data) {
          toast.error(error.response.data.err);
      }
      }
   }

   async function updateData(event){
    event.preventDefault()
    try {
        const response = await employeeController.updateEmp(id,name, email, contact, designation, gender, course, coverImage)
  
         toast.success(response.msg)
      } catch (error) {
        if (error.response && error.response.data) {
         return toast.error(error.response.data.err);
      }
      }
   }

    return (
        <>
        <ToastContainer/>
        <h1 className="heading">Update Employee</h1>
            <div id="employee">
                <form onSubmit={updateData}>
                    <div className="emp-gridy">
                        <div className="form-group">
                            <input type="text" value={name} onChange={(event)=>{return setName(event.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name...." />
                        </div>

                        <div className="form-group">
                            <input type="email" value={email} onChange={(event)=>{return setEmail(event.target.value)}}  className="form-control" id="exampleInputPassword1" placeholder="Enter Email...." />
                        </div>

                        <div className="form-group">
                            <input type="tel" value={contact} onChange={(event)=>{return setContact(event.target.value)}}  className="form-control" id="exampleInputPassword1" placeholder="Enter Contact Number...." />
                        </div>

                        <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1"  value={designation} onChange={(event)=>{return setDesignation(event.target.value)}} >
                                <option>HR</option>
                                <option>Manager</option>
                                <option>Sales</option>
                            </select>
                        </div>

                        <div className="radio">
                            <label htmlFor="">Gender :</label>
                            <input type="radio" value={"Male"} checked={gender === "Male"} onChange={(event)=>{return setGender(event.target.value)}}/> Male
                            <input type="radio" value={"Female"} checked={gender === "Female"} onChange={(event)=>{return setGender(event.target.value)}}/> Female
                        </div>

                        <div className="courses">
                            <label htmlFor="">Courses :</label>
                            <input type="checkbox" checked={course === "MCA"} value={"MCA"} onChange={(event)=>{return setCourses(event.target.value)}} /> MCA
                            <input type="checkbox" checked={course === "BCA"} value={"BCA"} onChange={(event)=>{return setCourses(event.target.value)}} /> BCA
                            <input type="checkbox" checked={course === "BSC"}value={"BSC"} onChange={(event)=>{return setCourses(event.target.value)}} /> BSC
                        </div>

                        <div className="form-group user-img">
                            <label htmlFor="exampleFormControlFile1">Upload Image</label>
                            <input type="file" onChange={(event)=>{return setTempImage(event.target.files[0])}} className="form-control-file" id="exampleFormControlFile1" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary emp-create-btn">Submit</button>
                </form>
            </div>

            <Footer/>
        </>
    )
}