import React, { useState } from 'react';
import data from './data';
import './index.css';

function App() {
	const [ paragraphCount, setParagraphCount ] = useState(0);
	const [ text, setText ] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let pCount = parseInt(paragraphCount);
		// slice will return a new copy of array we select item from (startIndx , endIndx)
		if (isNaN(pCount) || pCount <= 0) {
			pCount = 1;
		}
		//I have total 9 paragraph in my data.js
		if (pCount > 9) {
			pCount = 9;
		}
		setText(data.slice(0, pCount));
	};
	return (
		<section className="section-center">
			<h3>Dummy text? More like dummy thicc text, amirite?</h3>
			<form className="lorem-form" onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="amount">parapgraphs: </label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={paragraphCount}
					onChange={(e) => setParagraphCount(e.target.value)}
				/>
				<button type="submit" className="btn">
					Generate
				</button>
			</form>
			<article className="lorem-text">
				{text.map((paragraph, index) => {
					return <p key={index}>{paragraph}</p>;
				})}
			</article>
		</section>
	);
}

export default App;
