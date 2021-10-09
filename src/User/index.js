import React from 'react'
import { SkeletonUserProfile } from '../Skeleton/SkeletonUserProfile'
import { UserInfo } from '../UserInfo'

const User = () => {
    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        setTimeout(() => {
            async function fetchData() {
                const res = await fetch('https://randomuser.me/api/')
                const data = await res.json()
                console.log(data)
                setUser(data.results[0])
            }
            fetchData()
        }, 5000)
    }, [])
    
    return (
        <div className="user-container">
            {!user && (
                <SkeletonUserProfile />
            )}
            {user && (
                <div className="user-content">
                    <div className="user-picture">
                        {user && (
                            <img src={user.picture.large} />
                        )}
                    </div>
                    <UserInfo 
                        first={user.name.first}
                        last={user.name.last}
                        email={user.email}
                        username={user.login.username}
                        city={user.location.city}
                    />   
                </div>
            )}
        </div>
    )
}

export { User }