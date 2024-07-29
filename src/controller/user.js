
import user from "../Models/user"
import userServer from "../services/user"

const users = {
    signup: async (username, password) => {
        const userData = new user(username, password);
        return await userServer.signup(userData);
      },
    
      signin: async (username, password) => {
        const userData = new user(username, password);
        return await userServer.signin(userData);
      }
}

export default users