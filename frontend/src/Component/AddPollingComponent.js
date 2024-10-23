import React, { useState } from 'react';
import AddPollingService from '../Services/AddPollingService';
import { useNavigate } from 'react-router-dom';

const AddPollingComponent = () => {
    const [polls, setPoll] = useState({
        title: '',
        description: '',
        options: [''] // Initialize with one empty option
    });

    const { title, description, options } = polls;
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPoll({ ...polls, [e.target.name]: e.target.value });
    }

    const addOption = () => {
        setPoll({ ...polls, options: [...options, ''] }); // Add a new empty option
    }

    const handleOptions = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setPoll({ ...polls, options: newOptions });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedOptions = options.map(option => ({ optionName: option }));
        const formattedPolls = { ...polls, options: formattedOptions };
        const token = localStorage.getItem('token');

        try {
            await AddPollingService.createPoll(formattedPolls, token);
            navigate("/pollList");
        } catch (error) {
            console.error("Error creating poll:", error);
            // Handle error (e.g., show a message to the user)
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Create New Poll</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='title' className='form-label'>Poll Title</label>
                            <input type="text"
                                className='form-control'
                                placeholder='Enter a title for poll'
                                name="title"
                                value={title}
                                onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='description' className='form-label'>Description</label>
                            <input type="text"
                                className='form-control'
                                placeholder='Enter a description for poll'
                                name="description"
                                value={description}
                                onChange={handleChange} />
                        </div>
                        {options.map((option, index) => (
                            <div className='mb-3' key={index}>
                                <label htmlFor={`option${index}`} className='form-label'>Option {index + 1}</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder='Enter an option for poll'
                                    name={`option${index}`}
                                    value={option}
                                    onChange={(e) => handleOptions(index, e.target.value)} />
                            </div>
                        ))}
                        <button type='button' className='btn btn-primary' onClick={addOption}>Add Option</button>
                        &nbsp; &nbsp; &nbsp;
                        <button type="submit" className='btn btn-outline-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPollingComponent;
