import React from 'react'

const ConfirmComponent = () => {
    return (
        <div className='container'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h1 className='text-center'>Vote Confirmation</h1>
                <p>Thank you for voting</p>
                <p>Your vote has been successfully submitted</p>
                <a href="/pollList">Back to Poll List</a>
            </div> 
        </div>
      )
}

export default ConfirmComponent
