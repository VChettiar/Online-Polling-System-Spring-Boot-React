import React from 'react'

const UserHome = () => {
    return (
        <div className='container'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h1 className='text-center'>Welcome to Online Polling</h1>
                <a href="/pollList">Poll List</a> &nbsp; &nbsp;
                <p>Manage and participate in polls with ease. Use the navigation links to create polls or view and vote in existing ones</p>
            </div> 
        </div>
      )
}

export default UserHome
