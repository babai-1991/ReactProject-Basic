import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './index.css';

const url = 'https://course-api.com/react-tours-project';
function App() {
	const [ loading, setLoading ] = useState(true);
	const [ tours, setTours ] = useState([]);

	useEffect(() => {
		fetchTours();
	}, []);

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => {
			return tour.id != id;
		});
		setTours(newTours);
	};

	//using promise
	// const fetchTours = () => {
	// 	//precaution..
	// 	setLoading(true);
	// 	fetch(url)
	// 		.then((onResolved) => {
	// 			return onResolved.json();
	// 		})
	// 		.then((responseData) => {
	// 			console.log(responseData);
	// 		})
	// 		.catch((error) => {
	// 			console.log('Error :=> ' + error);
	// 		});
	// };

	//using async await
	const fetchTours = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setLoading(false);
			setTours(data);
			//console.log(data);
		} catch (error) {
			setLoading(false);
			console.log('error: ' + error);
		}
	};

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	} else if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>No tours left</h2>
					<button className="btn" onClick={() => fetchTours()}>
						Load Tours
					</button>
				</div>
			</main>
		);
	} else {
		return (
			<main>
				<Tours tours={tours} removeTour={removeTour} />
			</main>
		);
	}
}

export default App;
