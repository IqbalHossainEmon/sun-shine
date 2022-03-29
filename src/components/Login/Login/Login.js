import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Shared from "../Shared/Shared";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import "./Login.css";

const Login = () => {
	const {
		signInUsingGoogle,
		setError,
		error,
		setLoading,
		signInUsingPass,
		setUser,
	} = useAuth();

	const location = useLocation();
	const navigate = useNavigate();
	const [validated, setValidated] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [valimsg, setvalimsg] = useState("-");

	const redirect_uri = location.state?.from?.pathname || "/";

	const handleSubmit = (event) => {
		event.preventDefault();
		if (password === "" || email === "") {
			setvalimsg("Please Give Valid Email and Password");
			setValidated(true);
			return;
		} else {
			setValidated(false);
			signInUsingPass(email, password)
				.then((res) => {
					setUser(res.user);
					navigate(redirect_uri);
				})
				.catch((error) => setError(error.message));
		}
	};

	const handleGoogleSignIn = () => {
		setError("");
		signInUsingGoogle()
			.then(() => navigate(redirect_uri))
			.catch((error) => setError(error.message))
			.finally(() => setLoading(false));
	};

	return (
		<div id='login'>
			<div className='shared'>
				<Shared />
			</div>
			<div id='login-form'>
				<h1>Please Login 😄</h1>
				<input
					onBlur={(e) => setEmail(e.target.value)}
					placeholder='Your Email'
					type='email'
				/>
				<input
					onBlur={(e) => setPassword(e.target.value)}
					placeholder='Your passworld'
					type='password'
				/>
				<p
					className='error-show'
					style={
						validated || error
							? { visibility: "visible" }
							: { visibility: "hidden" }
					}>
					{error || valimsg}
				</p>
				<button onClick={handleSubmit}>Sign In</button>
				<p>
					New Here? <NavLink to='/registration'>Register</NavLink>
				</p>
				<div className='google-button'>
					<button onClick={handleGoogleSignIn}>
						<AiFillGoogleCircle size={20} /> Sign in using Google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
