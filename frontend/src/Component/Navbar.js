import React from 'react'
import LoginService from '../Services/LoginService'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const isAuthenticated = LoginService.isAuthenticated();
    const isAdmin = LoginService.isAdmin();
    const isUser = LoginService.isUser();

    const handleLogout = () => {
        const confirmDelete = window.confirm("Are you sure you want to logout")
        if(confirmDelete){
            LoginService.userlogout();
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-primary">
            <div className="collapse navbar-collapse" id="navbarNav">
                <center>
                <ul className="navbar-nav mx-auto">
                    {!isAuthenticated && <li>
                        <a className="nav-link" href="/">Online Polling</a>
                        </li>}
                    {isAdmin && <li>
                        <a className="nav-link" href="/home">Home</a>
                        </li>}
                    {(isAdmin) && <li>
                        <a className="nav-link" href="/addPolling">Add Polling</a>
                        </li>} 
                    {isAdmin && <li>
                        <a className="nav-link" href="/voteList">Vote List</a>
                        </li>} 
                    {isUser && <li>
                        <a className="nav-link" href="/userHome">Home</a>
                        </li>} 
                    {(isUser || isAdmin) && <li>
                        <a className="nav-link" href="/pollList">Poll List</a>
                        </li>} 
                    {isAuthenticated && <li>
                        <a className="nav-link" href="/" onClick={handleLogout}>Logout</a>
                        </li>}
                {/* <li className="nav-item active">
                    <a className="nav-link" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pollList">Poll List</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="addPolling">Create Poll</a>
                </li> */}
                </ul>
                </center>
            </div>
        </nav>
      )
}

export default Navbar
