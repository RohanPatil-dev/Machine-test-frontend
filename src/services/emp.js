import axios from 'axios';

const token = localStorage.getItem("uid");

const empService = {
  createEmp: async (emp) => {
    try {
      const response = await axios.post('http://localhost:8081/employee/create-Emp', emp, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });
      return response.data;
    } catch (error) {
      throw error
    }
  },
  deleteEmp: async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8081/employee/emp-delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error
    }
  },
  updateEmp: async (id,emp) => {
    try {
      const response = await axios.put(`http://localhost:8081/employee/emp-update/${id}`,emp, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error
    }
  },
  singleEmp : async(id) => {
    try {
      const response = await axios.get(`http://localhost:8081/employee/singleData/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error
    }
  }
}

export default empService