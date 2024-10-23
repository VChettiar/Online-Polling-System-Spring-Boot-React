import React from 'react'

const Home = () => {
    return (
        <div className='container'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h1 className='text-center'>Welcome to Online Polling</h1>
                <a href="/addPolling"> Create Poll</a> &nbsp; &nbsp;
                <a href="/voteList"> Vote List</a>
                <p>Manage and participate in polls with ease. Use the navigation links to create polls or view and vote in existing ones</p>
            </div> 
        </div>
      )
}

export default Home
