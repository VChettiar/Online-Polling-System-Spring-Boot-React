import React from 'react'

const HomePage = () => {
    return (
        <div className='container'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h1 className='text-center'>Welcome to Online Polling</h1>
                <a href="/login">Login</a> &nbsp; &nbsp;
                <a href="/register"> Register</a>
            </div> 
        </div>
      )
}

export default HomePage
