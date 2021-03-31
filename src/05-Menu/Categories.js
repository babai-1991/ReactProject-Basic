import React from 'react';

const Categories = ({ filterItems, categories }) => {
	return (
		<div className="btn-container">
			{/* <button className="filter-btn" onClick={() => filterItems('breakfast')}>
				BreakFast
			</button> */}
			{categories.map((categoryName, index) => {
				return (
					<button key={index} className="filter-btn" onClick={() => filterItems(categoryName)}>
						{categoryName}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
