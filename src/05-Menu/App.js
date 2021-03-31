import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './index.css';

function App() {
	const [ menuItems, setMenuItems ] = useState(items);
	const [ categories, setCategories ] = useState([]);

	//filter items by category
	const filterItems = (categoryName) => {
		if (categoryName == 'all') {
			setMenuItems(items);
			return;
		} else {
			const filteredItemsByCategory = items.filter((item) => {
				return item.category == categoryName;
			});
			setMenuItems(filteredItemsByCategory);
		}
	};

	useEffect(() => {
		allCategories();
	}, []);

	//filter categories from item data
	const allCategories = () => {
		//set will remove all duplicate categories
		const categories = new Set(
			items.map((item) => {
				return item.category;
			})
		);
		const distinctCategories = [ 'all', ...categories ];
		setCategories(distinctCategories);
		//console.log([ 'all', ...categories ]);
	};

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>Our Menus</h2>
					<div className="underline" />
				</div>
				<Categories filterItems={filterItems} categories={categories} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
