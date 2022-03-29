import React from "react";
import { NavLink } from "react-router-dom";
import Shared from "../Shared/Shared";
import "./Login.css";

const Login = () => {
	return (
		<div id='login'>
			<div className='shared'>
				<Shared />
			</div>
			<div id='login-form'>
				<h1>Please Login 😄</h1>
				<input placeholder='Your Email' type='email' />
				<input placeholder='Your passworld' type='password' />
				<p>
					New Here? <NavLink to='/registration'>Register</NavLink>
				</p>
				<button>Sign In</button>
			</div>
		</div>
	);
};

export default Login;
