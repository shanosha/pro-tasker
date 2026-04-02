import { Link } from "react-router-dom"
import { useUser } from "../context/UserContext"
import ThemeToggle from "./ThemeToggler"

function Navbar() {

    const { user, logout } = useUser()

    return (
        <>
            <nav>
                <ul>
                    {user ?
                        <>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li onClick={logout}><Link to="/login">Logout</Link></li>
                            <li><ThemeToggle /></li>
                        </>
                        :
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar