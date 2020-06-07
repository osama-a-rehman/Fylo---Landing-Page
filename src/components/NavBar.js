import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
	return (
		<div className="nav-bar--container">
			<div className="nav-bar--main-container container">
				<div className="nav-bar--logo-container">
					<img
						className="nav-bar--image"
						src="/assets/images/logo.svg"
						alt="Logo"
					/>
				</div>

				<ul className="nav-bar--links-list">
					<li className="nav-bar--links-list-item">
						<a href="#" className="nav-bar--links-list-item-link">
							Features
						</a>
					</li>

					<li className="nav-bar--links-list-item">
						<a href="#" className="nav-bar--links-list-item-link">
							Team
						</a>
					</li>

					<li className="nav-bar--links-list-item">
						<a href="#" className="nav-bar--links-list-item-link">
							Sign in
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
