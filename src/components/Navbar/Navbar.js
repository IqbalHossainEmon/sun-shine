import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Navbar.css";
import { MdOutlineLogout } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
	const { user, logOut } = useAuth();

	const currentUrl = useLocation().pathname;
	return (
		<nav>
			<div className='nav-div'>
				{/* icon & nav-title */}
				<div>
					<NavLink className='nav-title' to='/'>
						<img src='images/icon/sun-shine.svg' alt='' />
						<h1 id='nav-title'>un Shine</h1>
					</NavLink>
				</div>
				{/* Nav Links */}
				<div>
					<ul id='nav-links'>
						<div
							id={
								currentUrl === "/login" || currentUrl === "/registration"
									? "hide-nav"
									: "show"
							}>
							<li>
								<a href='#services'>Services</a>
							</li>
							<li>
								<a href='#details'>Details</a>
							</li>
							<li>
								<a href='#events'>Upcoming Events</a>
							</li>
						</div>
						<li>
							{user.email ? (
								<div className='user'>
									<div className='user-info'>
										{user.photoURL ? (
											<img src={user.photoURL} alt='' />
										) : (
											<AiOutlineUser size={30} />
										)}
										<p>{user.displayName?.split(" ")[0]}</p>
									</div>
									<MdOutlineLogout
										onClick={logOut}
										title='Logout'
										className='logout'
										color='orange'
										size={40}
									/>
								</div>
							) : (
								<span>
									<NavLink
										to={currentUrl === "/login" ? "/registration" : "/login"}>
										{currentUrl === "/login" ? "Registration" : "Login"}
									</NavLink>
								</span>
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
