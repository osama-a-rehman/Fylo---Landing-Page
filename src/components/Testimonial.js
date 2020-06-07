import React from 'react';

import '../styles/Testimonial.css';

const Testimonial = ({
	testimonial,
	personName,
	personDesignation,
	personCompany,
	personImageSrc,
}) => {
	return (
		<div className="testimonial--container">
			<div className="testimonial--quotes-image-container">
				<img
					className="testimonial--quotes-image"
					src="/assets/images/icon-quotes.svg"
					alt="Quotes"
				/>
			</div>

			<p className="testimonial--testimonial-paragraph">{testimonial}</p>

			<div className="testimonial--person-container">
				<div className="testimonial--person-image-container">
					<img
						className="testimonial--person-image"
						src={personImageSrc}
						alt="Testimonial User Avatar"
					/>
				</div>

				<div className="testimonial--person-info-container">
					<span className="testimonial--person-name">
						{personName}
					</span>
					<span className="testimonial--person-info">
						{personDesignation}, {personCompany}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
