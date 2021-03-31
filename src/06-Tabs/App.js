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
		const { id, order, title, dates, duties, company } = jobs[jobIndex];
		return (
			<section className="section">
				<div className="title">
					<h2>Experience</h2>
					<div className="underline" />
				</div>
				<div className="jobs-center">
					<div className="btn-container">
						{jobs.map((job, index) => {
							return (
								<button
									key={job.id}
									className={`job-btn ${index == jobIndex && 'active-btn'}`}
									onClick={() => setJobIndex(index)}
								>
									{job.company}
								</button>
							);
						})}
					</div>
					<article className="job-info">
						<h3>{title}</h3>
						<h4>{company}</h4>
						<p className="job-date">{dates}</p>
						{duties.map((duty, index) => {
							return (
								<div key={index} className="job-desc">
									<FaAngleDoubleRight className="job-icon" />
									<p>{duty}</p>
								</div>
							);
						})}
					</article>
				</div>
			</section>
		);
	}
}

export default App;
