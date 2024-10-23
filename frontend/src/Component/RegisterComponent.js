import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import LoginService from "../Services/LoginService";
import RegisterService from "../Services/RegisterService";

const RegisterComponent = () => {

    const[registerDetails, setRegisterDetails] = useState({
        name:'',
        email:'',
        password:'',
        role:''
    });

    const [error, setError] = useState('');

    const{name, email, password, role} = registerDetails;

    const navigate = useNavigate();

    const handleChange = (e) => {
        setRegisterDetails({...registerDetails, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await RegisterService.register(registerDetails);

            setRegisterDetails({
                name:'',
                email:'',
                password:'',
                role:''
            });
            alert("User Registered Successfully");
            navigate("/login")

        }catch(error){
            console.error('Error registering the user: '.error);
            alert('An error occured while registering user')
        }
    }
    return (
        <div className="auth-container">
            <h2>Registration</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <label>Name</label>
                    <input type = "text" name = "name" value={name} onChange={(e) => handleChange(e)} required/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type = "email" name = "email" value={email} onChange={(e) => handleChange(e)} required/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type = "password" name = "password" value={password} onChange={(e) => handleChange(e)} required/>
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <input type = "text" name = "role" value={role} onChange={(e) => handleChange(e)} required/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterComponent
