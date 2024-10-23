import axios from "axios"

const API_URL_REGISTER = "http://localhost:8081/onlinepolling/register";
class RegisterService{
    register = async (userData) => {
        try{
            const response = await axios.post(API_URL_REGISTER,userData);
            return response.data;
        }catch(err){
            throw err;
        }
    }
}

export default new RegisterService()