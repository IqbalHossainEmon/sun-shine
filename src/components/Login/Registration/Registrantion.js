import React from "react";
import { NavLink } from "react-router-dom";
import Shared from "../Shared/Shared";
import "./Registration.css";

const Registrantion = () => {
	return (
		<div id='register'>
			<div className='shared'>
				<Shared />
			</div>
			<div id='register-form'>
				<h1>Welcome. Please Register 😊</h1>
				<input placeholder='Your Beautiful Name' type='text' />
				<input placeholder='Your email' type='email' />
				<input placeholder='Give a Password' type='password' />
				<p>
					You have account? <NavLink to='/login'>Login</NavLink>
				</p>
				<button>Sign Up</button>
			</div>
		</div>
	);
};

export default Registrantion;
