import React from 'react';

import '../styles/EarlyAccess.css';

const App = () => {
	return (
		<div className="early-access--container">
			<div className="early-access--main-container container">
				<div className="early-access--info-col">
					<h1 className="primary-heading early-access--primary-heading">
						Get early access today
					</h1>

					<p className="primary-info early-access--primary-info">
						It only takes a minute to sign up and our free starter
						tier is extremely generous. If you have any questions,
						our support team would be happy to help you.
					</p>
				</div>

				<div className="early-access--get-started-col">
					<div className="early-access--get-started-form-container">
						<form>
							<div className="early-access--form-group">
								<input
									className="primary-input early-access--primary-input"
									type="email"
									placeholder="Enter your email..."
								/>

								<button
									type="submit"
									className="btn btn-get-started early-access--btn-get-started"
								>
									Get Started For Free
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
