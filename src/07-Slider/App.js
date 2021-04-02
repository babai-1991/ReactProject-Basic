import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import './index.css';
import data from './data';
function App() {
	const [ people, setPeople ] = useState(data);
	const [ index, setIndex ] = useState(0);

	//when click on previous button for first time or when items runs out
	useEffect(
		() => {
			const lastIndexOfPeopleArray = people.length - 1;
			//whn click on prev btn
			if (index < 0) {
				setIndex(lastIndexOfPeopleArray);
			}

			//next btn click and run out of items
			if (index > lastIndexOfPeopleArray) {
				//back to start
				setIndex(0);
			}
		},
		[ index, people ]
	);

	//autoplay
	useEffect(
		() => {
			let slider = setInterval(() => {
				setIndex(index + 1);
			}, 3000);

			return () => {
				clearInterval(slider);
			};
		},
		[ index ]
	);
	return (
		<section className="section">
			<div className="title">
				<h2>
					<span>/</span>reviews
				</h2>
			</div>
			<div className="section-center">
				{people.map((person, personIndex) => {
					const { id, image, name, title, quote } = person;

					// by default all article will get a nextSlide class , will placed (most right).
					let position = 'nextSlide';
					if (personIndex === index) {
						position = 'activeSlide';
					}
					/*
					(personIndex == index - 1) => means when I click on next button activeSlide will 
					become lastSlide hence  put the item 
					at the left(translateX(-100%)) of activeSlide

					(index == 0 && personIndex == people.length - 1) =>  what this code means? 
					well this simply means when app first renders(index=0) , put the last person item 
					at the left(translateX(-100%)) of activeSlide */
					if (personIndex == index - 1 || (index == 0 && personIndex == people.length - 1)) {
						position = 'lastSlide';
					}
					return (
						<article key={id} className={position}>
							<img src={image} alt={name} className="person-img" />
							<h4>{name}</h4>
							<p className="title">{title}</p>
							<p className="text">{quote}</p>
							<FaQuoteRight className="icon" />
						</article>
					);
				})}
				<button className="prev" onClick={() => setIndex(index - 1)}>
					<FiChevronLeft />
				</button>
				<button className="next" onClick={() => setIndex(index + 1)}>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
}

export default App;
