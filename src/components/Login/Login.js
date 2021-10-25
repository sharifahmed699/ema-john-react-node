import React from 'react';
import { Link } from 'react-router-dom';
import './login-form.css'

const Login = () => {
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
                <button>Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;