import React from 'react';

import Testimonial from './Testimonial';
import '../styles/LandingPageSubSection.css';

const LandingPageSubSection = () => {
	const testimonial = {
		testimonial:
			'Fylo has improved our team productivity by an order of magnitude. Since making the switch to our team has become a well-oiled collaboration machine.',
		personName: 'Kyle Burton',
		personDesignation: 'Founder & CEO',
		personCompany: 'Huddle',
		personImageSrc: '/assets/images/avatar-testimonial.jpg',
	};
	return (
		<div className="landing-page-sub-section--container-wrapper">
			<div className="landing-page-sub-section--container container">
				<div className="landing-page-sub-section--col">
					<div className="landing-page-sub-section--image-container">
						<img
							className="landing-page-sub-section--illustration"
							src="/assets/images/illustration-2.svg"
							alt="Illustration-1"
						/>
					</div>
				</div>

				<div className="landing-page-sub-section--col landing-page-sub-section--info-col">
					<h1 className="primary-heading landing-page-sub-section--primary-heading">
						Stay productive, wherever you are
					</h1>

					<p className="primary-info landing-page-sub-section--primary-info m-t--xx-large">
						Never let location be an issue when accessing your
						files. Fylo has you covered for all of your file storage
						needs.
					</p>

					<p className="primary-info landing-page-sub-section--primary-info">
						Securely share files and folders with friends, family
						and colleagues for live collaboration. No email
						attachments required!
					</p>

					<div className="landing-page-sub-section--primary-link-container">
						<a href="#" className="primary-link ">
							See how Fylo works{' '}
							<i
								class="fa fa-arrow-circle-right"
								aria-hidden="true"
							></i>
						</a>
					</div>

					<div className="landing-page-sub-section--testimonial-wrapper">
						<div className="landing-page-sub-section--testimonial-container">
							<Testimonial
								testimonial={testimonial.testimonial}
								personName={testimonial.personName}
								personDesignation={
									testimonial.personDesignation
								}
								personCompany={testimonial.personCompany}
								personImageSrc={testimonial.personImageSrc}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPageSubSection;
