import React from 'react';

import '../styles/Footer.css';

const Footer = () => {
	return (
		<div className="footer--container">
			<div className="footer--main-container container">
				<div className="footer--info-logo-container">
					<img
						src="/assets/images/logo-white.svg"
						alt="footer-logo"
					/>
				</div>

				<div className="footer--info-and-links-container">
					<div className="footer--info-section-col">
						<div className="footer--info-container">
							<div className="footer--info-col">
								<img
									className="footer--info-icon-image"
									src="/assets/images/icon-phone.svg"
									alt="Phone"
								/>

								<p className="footer--info-paragraph">
									Phone: +1-543-123-4567
								</p>
							</div>

							<div className="footer--info-col">
								<img
									className="footer--info-icon-image"
									src="/assets/images/icon-email.svg"
									alt="Email"
								/>

								<p className="footer--info-paragraph">
									example@huddle.com
								</p>
							</div>
						</div>
					</div>

					<div className="footer--links-col">
						<div className="footer--links-sub-col">
							<a href="#" className="footer--link">
								About us
							</a>

							<a href="#" className="footer--link">
								What we do
							</a>

							<a href="#" className="footer--link">
								FAQ
							</a>
						</div>
						<div className="footer--links-sub-col">
							<a href="#" className="footer--link">
								Career
							</a>

							<a href="#" className="footer--link">
								Blog
							</a>

							<a href="#" className="footer--link">
								Contact us
							</a>
						</div>
						<div className="footer--links-sub-col footer--social-icons-col">
							<i
								class="fa fa-facebook circle-icon"
								aria-hidden="true"
							></i>

							<i
								class="fa fa-twitter circle-icon m-l--medium"
								aria-hidden="true"
							></i>

							<i
								class="fa fa-instagram circle-icon m-l--medium"
								aria-hidden="true"
							></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
