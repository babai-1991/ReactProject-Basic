import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './index.css';

const url = 'https://course-api.com/react-tabs-project';
function App() {
	const [ loading, setLoading ] = useState(true);
	const [ jobs, setJobs ] = useState([]);
	const [ jobIndex, setJobIndex ] = useState(0);
	useEffect(() => {
		fetchJobs();
	}, []);

	const fetchJobs = () => {
		fetch(url)
			.then((onSuccessResult) => {
				return onSuccessResult.json();
			})
			.then((jobs) => {
				//console.log(jobs);
				setJobs(jobs);
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
			});
	};

	if (loading) {
		return (
			<section className="section loading">
				<h1>loading...</h1>
			</section>
		);
	} else {
		return (
			<div className="container">
				<h2>Jobs </h2>
			</div>
		);
	}
}

export default App;
