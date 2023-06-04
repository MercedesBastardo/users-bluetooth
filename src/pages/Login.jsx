import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '../components/Alert';


const Login = () => {

    const { register, handleSubmit} = useForm();

    const [alert, setAlert] = useState(false)
    const navigate = useNavigate()

    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (user && token) {
          navigate('/')
        }
    }, [])

    const submit =(data) => {
       
      console.log(data)
      
        axios.post(`https://api-users-bluetooth.onrender.com/users/login`, data)
        .then(resp => {
          console.log(resp.data);
          localStorage.setItem("token", resp.data.token);
          localStorage.setItem("user", resp.data.user.firstName)
          navigate("/me")
        })
        .catch(error =>{
          console.log(error)
          setAlert(true)
          setTimeout(() => {
            setAlert(false)
        }, 3000)
        })

    }
    return (
        <div>
            <div className='userLogin'>
                <form onSubmit={handleSubmit(submit)}>
                    <div>
                            <label htmlFor='email-input'>Email</label>
                            <input type='email' id='email-input' {...register("email")} />
                    </div>
                    <div>
                            <label htmlFor='password-input'>Password</label>
                            <input type='password' id='password-input' {...register("password")} />
                    </div>
                    <button type='submit'>
                        Submit
                    </button>
                </form>
                <Alert
                        isVisible={alert}
                        msg={{ msg: '¡Ha ocurrido un error!'}}
                />
                <div>
                    <h3>Don´t have an account yet? <Link to={'/create'} >Register</Link></h3>
                
                </div>
            </div>

            <div>
                <h1>
                    Do you want to connect a bluetooth through this website?
                </h1>
            </div>
        </div>
    );
};

export default Login;