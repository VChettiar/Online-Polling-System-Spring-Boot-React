import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginService from "../Services/LoginService";

const LoginComponent = () => {
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const { email, password } = loginDetails;
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await LoginService.login(loginDetails);
            if (userData.token) {
                localStorage.setItem('token', userData.token);
                localStorage.setItem('role', userData.role);
                if(userData.role === 'ADMIN'){
                    navigate("/home");
                }else{
                    navigate("/userHome");
                }
            } else {
                setError(userData.error || "Login failed. Please try again.");
            }
        } catch (err) {
            console.log(err);
            setError(err.message || "An unexpected error occurred.");
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    }

    return (
        <div className="auth-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginComponent;
