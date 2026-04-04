import { useUser } from "../context/UserContext"

function Profile() {
    const { user } = useUser()
    
    return (
        <>
            <h1>User Profile</h1>
            {
                user &&
                <section className="bg">
                    <p><span className="label">Username:</span> {user.username}</p>
                    <p><span className="label">Email:</span> {user.email}</p>
                </section>
            }
        </>
    )
}

export default Profile