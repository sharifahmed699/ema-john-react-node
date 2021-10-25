import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create New Account</h2>
                <form action="">
                    <input type="text" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id=""  placeholder="Your Passwors"/>
                    <br />
                    <input type="password" name="" id=""  placeholder="Re Inter Passwors"/>
                    <br />
                    <input type="submit" value="Register" />
                </form>
                <p>Already Have A Account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;