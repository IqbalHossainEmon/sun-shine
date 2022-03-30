import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Shared from "../Shared/Shared";
import "./Registration.css";

const Registrantion = () => {
	const { signUpUsingPassword, error, setError, setUser, setUserName } =
		useAuth();

	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [registrationUserName, setRegistrationName] = useState("");
	const [password, setPassword] = useState("");
	const [validated, setValidated] = useState(false);
	const [reqMessage, setreqMessage] = useState("-");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === "" || email === "" || registrationUserName === "") {
			setreqMessage("Please fill All the Fields");
			setValidated(true);
			return;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			setreqMessage("Please Enter a Valid Email");
			setValidated(true);
			return;
		} else if (!/.{8,32}/.test(password)) {
			setreqMessage("Password should be at least 8 characters");
			setValidated(true);
			return;
		} else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
			setreqMessage("Ensure Password has two digits.");
			setValidated(true);
			return;
		} else {
			setreqMessage("-");
			setValidated(false);
			setError("");
			signUpUsingPassword(email, password)
				.then((result) => {
					setUserName(registrationUserName);
					setUser(result.user);
					setError("");
					navigate("/");
				})
				.catch((error) => setError(error.message));
		}
	};

	return (
		<div id='register'>
			<div className='shared'>
				<Shared />
			</div>
			<form id='register-form'>
				<h1>Welcome. Please Register 😊</h1>
				<input
					onChange={(e) => {
						setValidated(false);
						return setRegistrationName(e.target.value);
					}}
					placeholder='Your Beautiful Name'
					type='text'
				/>
				<input
					onChange={(e) => {
						setValidated(false);
						return setEmail(e.target.value);
					}}
					placeholder='Your email'
					type='email'
				/>
				<input
					onChange={(e) => {
						setValidated(false);
						return setPassword(e.target.value);
					}}
					placeholder='Give a Password'
					type='password'
				/>
				<p
					className='error-show'
					style={
						validated || error
							? { visibility: "visible" }
							: { visibility: "hidden" }
					}>
					{reqMessage !== "-" ? reqMessage : error}
				</p>
				<button onClick={handleSubmit} type='submit'>
					Sign Up
				</button>
				<p>
					You have account? <NavLink to='/login'>Login</NavLink>
				</p>
			</form>
		</div>
	);
};

export default Registrantion;
