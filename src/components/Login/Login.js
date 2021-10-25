import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login-form.css'

const Login = () => {
    const {signInWithGoogle,setError} = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogle = () =>{
        signInWithGoogle()
        .then((result) => {
            history.push(redirect_uri);     
        }).catch((error) => {
            setError(error.message)
        });
    }
    return (
        <div className="login-form">
            <div>
                <h2>Please Login</h2>
                <form action="">
                    <input type="text" name="" id="" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Login" />
                </form>
                <p>New To Ema-John ? <Link to="/register">Create Account</Link></p>
                <div>-----------Or-----------</div>
                <button onClick={handleGoogle}>Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;