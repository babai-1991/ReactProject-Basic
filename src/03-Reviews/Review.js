import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [ reviewSlNo, setReviewSlNo ] = useState(0);
	//console.log(people);
	const { name, text, job, image } = people[reviewSlNo];

	//return array index
	const checkForElementInArray = (arrIndex) => {
		//clicked on next button
		if (arrIndex > people.length - 1) {
			//return 0 means , setReviewSlNo(0) so it will display first item again
			return 0;
		} else if (arrIndex < 0) {
			//clicked on previous button
			//return last element from array
			return people.length - 1;
		} else {
			//this wont necessary
			return arrIndex;
		}
	};

	const prevPerson = () => {
		setReviewSlNo((reviewSlNo) => {
			let newIndex = reviewSlNo - 1;
			return checkForElementInArray(newIndex);
		});
	};
	const nextPerson = () => {
		setReviewSlNo((reviewSlNo) => {
			let newIndex = reviewSlNo + 1;
			return checkForElementInArray(newIndex);
		});
	};

	const randomPerson = () => {
		let randomArrIndex = Math.floor(Math.random() * people.length);
		// eliminate repeat value
		if (randomArrIndex === reviewSlNo) {
			randomArrIndex = reviewSlNo + 1;
		}
		//console.log(randomArrIndex, reviewSlNo);
		setReviewSlNo(randomArrIndex);
	};

	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt={name} className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="author">{name}</h4>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			{/*  .button-container class is not required*/}
			<div className="button-container">
				<button className="prev-btn" onClick={() => prevPerson()}>
					<FaChevronLeft />
				</button>
				<button className="next-btn" onClick={() => nextPerson()}>
					<FaChevronRight />
				</button>
			</div>
			<button className="random-btn" onClick={() => randomPerson()}>
				surprise me
			</button>
		</article>
	);
};

export default Review;
