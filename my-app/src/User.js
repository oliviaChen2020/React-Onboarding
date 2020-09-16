import React from 'react'

function User({ details }) {
    if (!details) {
        return <h3>Working fetching your friend&apos;s details...</h3>
    }

    return (
        <div className='friend-container'>
            <div className='friend-card'>
                <h2>{details.name}</h2>
                <p>Email: {details.email}</p>
                <p>Terms of Service: {details.termsofservice}</p>

            </div>
        </div>
    )
}
export default User 