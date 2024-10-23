import React, { useEffect, useState } from 'react'
import PollListService from '../Services/PollListService'
import LoginService from '../Services/LoginService'

const PollListComponent = () => {

    const [showPolls, setShowPoll] = useState([]);

    const isUser = LoginService.isUser();
    const isAdmin = LoginService.isAdmin();
    useEffect(() => {
        loadUser();
    },[]);

    const loadUser = async () => {
        const token = localStorage.getItem('token');
        const result = await PollListService.showPoll(token);
        setShowPoll(result)
    }
    
    return (
        <div className='container'>
            <h1 className='text-center'>Poll List</h1>
            {isAdmin && <a href = {"/voteList"}>Vote List</a>}
            {
                showPolls.map(
                    poll => 
                        <div key={poll.id} className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                            {isUser && <a href = {`/updatePoll/${poll.id}`}>Vote</a>}
                            <h3>{poll.title}</h3>
                            <label><b>Description : </b><p>{poll.description}</p> </label>
                            {isAdmin && 
                                poll.options.map((opt, index) => (
                                    <div className='mb-3' key={index+1}>
                                        &nbsp; &nbsp;
                                        <label>{opt.optionName}</label>
                                    </div>
                                ))
                            }
                        </div> 
                )
            }
        </div>
      )
}

export default PollListComponent
