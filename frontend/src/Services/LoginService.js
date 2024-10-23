import axios from "axios"

const API_URL_LOGIN = "http://localhost:8081/onlinepolling/login";
class LoginService{
    static login = async (userData) => {
        try{
            const response = await axios.post(API_URL_LOGIN,userData);
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static userlogout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token
    }

    static isAdmin(){
        const role = localStorage.getItem('role')
        return role === 'ADMIN'
    }

    static isUser(){
        const role = localStorage.getItem('role')
        return role === 'USER'
    }

    static adminOnly(){
        return this.isAuthenticated() && this.isAdmin();
    }
}
export default LoginService