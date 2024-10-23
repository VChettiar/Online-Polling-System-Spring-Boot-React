import React, { useEffect, useState } from 'react'
import UpdatePollService from '../Services/UpdatePollService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePollComponent = () => {

    const[polls, setPoll] = useState({
        title:'',
        description:'',
        options: ['']
    });

    const id = useParams()
    const navigate = useNavigate();
    const {title, description, options} = polls;
    const [selectOptionId , setOptionId] = useState();
    const token = localStorage.getItem('token');

    useEffect(() => {
        loadUser();
    },[]);

    const loadUser = async () => {
        const result = await UpdatePollService.getPollByID(id,token);
        setPoll(result.data)
    }

    const handleChange = (e) => {
        const optionId = parseInt(e.target.value, 10);
        console.log(optionId);
        setOptionId(optionId);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(selectOptionId);
        await UpdatePollService.updatePoll(id, selectOptionId,polls,token);
        navigate("/confirmPage");
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Poll Details</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h3>{polls.title}</h3>
                    <label><b>Description : </b><p>{polls.description}</p> </label>
                    {options.map((opt, index) => (
                        <div className='mb-3' key={index+1}>
                            <input type={"radio"} 
                            name={`option${index+1}`} value={opt.id} onChange={(e) => handleChange(e)}/>
                            &nbsp; &nbsp;
                            <label>{opt.optionName}</label>
                        </div>
                    ))}
                    <button className='btn btn-outline-primary'>Submit</button>
                </div> 
            </form>
        </div>
      )
}

export default UpdatePollComponent
