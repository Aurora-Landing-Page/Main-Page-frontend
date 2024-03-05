import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Loader from '../AlertAndLoader/Loader';

const AboutPage = () => {

	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	const myStyle = {
		height: '100vh',
	};

	return (
		<div>
			{loading ? (
				<Loader />
			) :
				(
					<div style={myStyle}>
						<Navbar />
						<iframe
							title="ExternalHTML"
							src="./About/index.html"
							width="100%"
							height="100%"
							frameBorder="0"
						/>
					</div>

				)
			}
		</div>
	);
}

export default AboutPage
