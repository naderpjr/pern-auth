import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Register = ({ setUser }) => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", form);
            setUser(res.data);
            navigate("/");

            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setError("REgistertion Failed");
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            {error && <p className="text-error">{error}</p>}
            <input type="name" placeholder="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />

            <input type="email" placeholder="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

            <input type="password" placeholder="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />

            <button>Register</button>

        </form>
    )
}
