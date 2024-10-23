import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import {BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import AddPollingComponent from './Component/AddPollingComponent';
import PollListComponent from './Component/PollListComponent';
import UpdatePollComponent from './Component/UpdatePollComponent';
import ConfirmComponent from './Component/ConfirmComponent';
import Navbar from './Component/Navbar';
import HomePage from './Component/HomePage';
import LoginComponent from './Component/LoginComponent';
import RegisterComponent from './Component/RegisterComponent';
import UserHome from './Component/UserHome';
import VoteList from './Component/VoteList';
import LoginService from './Services/LoginService';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/userHome" element={<UserHome/>} />
          <Route exact path="/login" element={<LoginComponent/>} />
          <Route exact path="/register" element={<RegisterComponent/>} />
          <Route exact path="/pollList" element={<PollListComponent />} />
          <Route exact path="/updatePoll/:id" element={<UpdatePollComponent />} /> 
          <Route exact path="/confirmPage" element={<ConfirmComponent />} /> 
         {
            LoginService.adminOnly() && (
              <>
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/addPolling" element={<AddPollingComponent />} />
                <Route exact path="/voteList" element={<VoteList/>} />
              </>
          )}
          <Route path="*" element={<Navigate to= "/login"/>}></Route>
        </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
