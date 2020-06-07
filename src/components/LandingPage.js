import React from 'react';

import '../styles/LandingPage.css';
import NavBar from './NavBar';

const LandingPage = () => {
	return (
		<div className="landing-page--container-wrapper">
			<div className="landing-page--container container">
				<div className="landing-page--nav-bar-wrapper">
					<NavBar />
				</div>

				<div className="landing-page--main-container">
					<div className="landing-page--col landing-page--info-col">
						<div className="landing-page--image-container">
							<img
								className="landing-page--illustration"
								src="/assets/images/illustration-1.svg"
								alt="Illustration-1"
							/>
						</div>
					</div>
					<div className="landing-page--col">
						<h1 className="primary-heading">
							All you files in one secure location, accessible
							anywhere.
						</h1>

						<p className="primary-info">
							Fylo stores your most important files in one secure
							location. Access them wherever you need, share and
							collaborate with friends, family, and co-workers.
						</p>

						<div className="landing-page--get-started-form-container">
							<form>
								<div className="form-group">
									<input
										className="flex-2 m-r--medium primary-input"
										type="email"
										placeholder="Enter your email..."
									/>

									<button className="btn btn-get-started flex-1">
										Get Started
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
