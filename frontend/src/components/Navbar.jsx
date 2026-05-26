import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';

const Navbar = ({ user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await axios.post("http://localhost:5000/api/auth/logout");
        setUser(null);
        navigate("/");
    }


    return (
        <nav>
            <Link to="/" className="title-logo">PERN Auth</Link>
            <div className="btns">
                {user ? (
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                ) : (
                    <>
                        <Link to="/login" className="login-btn">Login</Link>
                        <Link to="/register" className="register-btn">Register</Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar