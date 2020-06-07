import React from 'react';

import '../styles/App.css';
import LandingPage from './LandingPage';
import LandingPageSubSection from './LandingPageSubSection';
import EarlyAccess from './EarlyAccess';
import Footer from './Footer';

const App = () => {
	return (
		<div className="app--container">
			<LandingPage />
			<LandingPageSubSection />
			<EarlyAccess />
			<Footer />
		</div>
	);
};

export default App;
