import React from 'react'

const UserInfo = ({ first, last, email, username, city }) => {
    return (
        <div className="user-info">
            <p className="user-info--title">Hi! My name is {first} {last}</p> 
            <p>@{username}</p>
            <p>Email: {email}</p>
            <p>City: {city}</p>
        </div>
    )
}

export { UserInfo }