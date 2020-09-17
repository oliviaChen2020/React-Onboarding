import React from 'react'

function User({ details }) {
    
    return (
        <div className='users-container'>
            <div className='user-card'>
                <h2>{details.first_name} {details.last_name}</h2>
                <p>Email: {details.email}</p>
                
            </div>
        </div>
    )
}
export default User 