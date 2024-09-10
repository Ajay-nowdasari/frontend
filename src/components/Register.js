import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password:''
    });
    const navigate = useNavigate();
    const [error,setError] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        
        e.preventDefault();
        if (formData.password !== formData.confirm_password){
            setError("confirmation password incorrect");
            return;
        }
        setError(null);
        axios.post('http://127.0.0.1:8000/api/register/',formData)
            .then(response => {
                console.log('Registration Successful:', response.data);
                alert("Registration Successful  ")
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    confirm_password:''
                })
                navigate('/LoginForm');
            })
            .catch(error => {
                console.error('There was an error!', error);
                setError("error when posting the data")
            });
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name : </label>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Last Name : </label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email : </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password : </label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Confirm Password : </label>
                <input
                    type="password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                />
            </div>
            {error && <p style={{color : 'red'}}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
        </div>
  )}
  
  
export default RegisterForm;