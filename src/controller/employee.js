
import emp from "../Models/employee"
import empServer from "../services/emp"

const employee = {
    createEmp: async (name, email, contact, designation, gender, course, coverImage) => {
        const empData = new emp(name, email, contact, designation, gender, course, coverImage)

        return await empServer.createEmp(empData)
    },
    deleteEmp: async(id) => {
         return await empServer.deleteEmp(id)
    },
    updateEmp : async(id,name, email, contact, designation, gender, course, coverImage) =>{
        const empData = new emp(name, email, contact, designation, gender, course, coverImage);
        return await empServer.updateEmp(id,empData)
    },
    singleEmp : async(id) =>{
        return await empServer.singleEmp(id)
    }
}

export default employee