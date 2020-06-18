import React from 'react'

function User({ details }) {
    if (!details) {
        return <h3>Working fetching your friend&apos;s details...</h3>
    }

    return (
        <div className='friend-container'>
            <div className='friend-card' id={details.email}>
                <h2 className='fullname'>{details.first_name} {details.last_name}</h2>
                <p className='email'>Email: {details.email}</p>
            </div>
        </div>
    )
}
export default User