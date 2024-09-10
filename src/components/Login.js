import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });
    const navigate = useNavigate();
    const [Member,setMember] = useState([])
    const [error,setError] = useState(null)

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/login/')
        .then(response => {
            setMember(response.data)
            
            console.log('logged data ',response.data)
        })
        .catch(error =>{
            console.error('there was an error',error);
            setError('error when posting the data')
        });
    }, []);
    const submitHandler = (e) => {
        e.preventDefault();
        const match = Member.find(user=>user.email===formData.email && user.password === formData.password)
            if (match){
                alert("🤟cheem tapak dum dum 🤟");
                setFormData({
                    email : '',
                    password : ''
                })
                navigate('/dashboard')
            }
            else {
                setError('entered invalid email or password')
            }
        }



return(
    <div>
        <form onSubmit = {submitHandler}>
            <div>
                <label>E-mail : </label>
                <input type="email" name="email" value={formData.email} onChange={changeHandler}/>
            </div>
            <div>
                <label>Passoword : </label>
                <input type="password" name="password" value={formData.password} onChange={changeHandler}/>
            </div>
            {error && <p style={{color : 'red'}}>{error}</p>}
        <button type="submit">Login</button>
        </form>
        
    </div>
)
}
export default LoginForm;