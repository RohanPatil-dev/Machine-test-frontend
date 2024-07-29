
import axios from 'axios';

const apiService = {
  signup: async (user) => {
    try {
      const response = await axios.post('http://localhost:8081/user-signup', user);
      return response.data;
    } catch (error) {
      throw error
    }
  },

  signin: async (user) => {
    try {
      const response = await axios.post('http://localhost:8081/user-signin', user);
      localStorage.setItem("uid", response.data.token)
      return response.data;
    } catch (error) {
      throw error
    }
  }
};

export default apiService;
