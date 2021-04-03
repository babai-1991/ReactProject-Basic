import React, { useState } from 'react';
import SingleColor from './SingleColor';
import './index.css';
// imported external Values.js libaray ⮦⮦
import Values from 'values.js';

function App() {
	const [ color, setColor ] = useState('');
	const [ error, setError ] = useState(false);
	//clean ui
	//const [ colorList, setColorList ] = useState([]);
	//populate with predefined color
	const [ colorList, setColorList ] = useState(new Values('#f41853').all(10));

	const handleSubmit = (e) => {
		e.preventDefault();
		// if invalid color entered, then Values.js will throw an exception.
		try {
			let colors = new Values(color).all(10); // Values()-> from library , all() returns array
			//console.log(colors);
			setColorList(colors);
			setError(false);
		} catch (error) {
			//console.log(error);
			setError(true);
		}
	};
	return (
		<React.Fragment>
			<section className="container">
				<h3>color generator</h3>
				<form onSubmit={(e) => handleSubmit(e)}>
					<input
						type="text"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						placeholder="#f41853"
						className={`${error ? 'error' : null}`}
					/>
					<button className="btn" type="submit">
						Generate
					</button>
				</form>
			</section>
			<section className="colors">
				{colorList.map((color, index) => {
					console.log(color);
					return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />;
				})}
			</section>
		</React.Fragment>
	);
}

export default App;
