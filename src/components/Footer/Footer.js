import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='FootermegaLink'>
				<div>
					<ul>
						<li>
							<a href='#abc'>Sun Shine Business</a>
						</li>
						<li>
							<a href='#abc'>Teach on Sun Shine</a>
						</li>
						<li>
							<a href='#abc'>Get the app</a>
						</li>
						<li>
							<a href='#abc'>About us</a>
						</li>
						<li>
							<a href='#abc'>Contact us</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<a href='#abc'>Careers</a>
						</li>
						<li>
							<a href='#abc'>Blog</a>
						</li>
						<li>
							<a href='#abc'>Help and Supports</a>
						</li>
						<li>
							<a href='#abc'>Affiliate</a>
						</li>
						<li>
							<a href='#abc'>Investors</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<a href='#abc'>Terms</a>
						</li>
						<li>
							<a href='#abc'>Privacy policy</a>
						</li>
						<li>
							<a href='#abc'>Cookie setting</a>
						</li>
						<li>
							<a href='#abc'>Site map</a>
						</li>
						<li>
							<a href='#abc'>Accessibility Statement</a>
						</li>
					</ul>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingRight: "2rem",
				}}>
				<div id='footer-title'>
					<a className='nav-title' href='index.html'>
						<h1 id='footer-title-text'>un Shine</h1>
						<img src='images/icon/sun-shine.svg' alt='' />
					</a>
				</div>
				<p>
					<small> © 2022 Sun shine-iqbal, Inc.</small>
				</p>
			</div>
		</div>
	);
};

export default Footer;
