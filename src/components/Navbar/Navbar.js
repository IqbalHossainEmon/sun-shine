import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	const currentUrl = useLocation().pathname;
	console.log(currentUrl);
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
							<span>
								<NavLink
									to={currentUrl === "/login" ? "/registration" : "/login"}>
									{currentUrl === "/login" ? "Registration" : "Login"}
								</NavLink>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
