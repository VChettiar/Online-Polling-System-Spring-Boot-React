import React, { useEffect, useState } from 'react'
import PollListService from '../Services/PollListService'
import LoginService from '../Services/LoginService'

const VoteList = () => {

    const [showPolls, setShowPoll] = useState([]);

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
            {
                showPolls.map(
                    poll => 
                        <div key={poll.id} className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                            <h3>{poll.title}</h3>
                            <label><b>Description : </b><p>{poll.description}</p> </label>
                            {isAdmin && 
                                <div className='mb-3'>
                                    <label>Voted For : </label>
                                    &nbsp; &nbsp;
                                    <label>{poll.voted}</label>
                                </div>
                            }
                        </div> 
                )
            }
        </div>
      )
}

export default VoteList
