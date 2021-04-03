import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
	//console.log(rgb);
	// rgb is an array
	const [ copiedToClipBoard, setCopiedToClipBoard ] = useState(false);
	const bcg = rgb.join(',');
	const hexFromRgb = rgbToHex(...rgb);
	const hexValue = `#${hexColor}`;

	const copyToClipBoard = () => {
		setCopiedToClipBoard(true);
		navigator.clipboard.writeText(hexValue);
	};
	useEffect(
		() => {
			const useForClear = setTimeout(() => {
				setCopiedToClipBoard(false);
			}, 3000);
			//before I set up another timeout, let me clear out the first one.
			return () => {
				clearTimeout(useForClear);
			};
		},
		[ copiedToClipBoard ]
	);
	return (
		// for better readibility for darker background add light color, use below code🡣
		// className={`color ${index > 10 && 'color-light'}`}
		<article
			className={`color ${index > 10 && 'color-light'}`}
			style={{ background: `rgb(${bcg})` }}
			onClick={() => copyToClipBoard()}
		>
			<p className="percent-value">{weight}%</p>
			{/* <p className="color-value">{hexFromRgb}</p> */}
			<p className="color-value">{hexValue}</p>
			{copiedToClipBoard && <p className="alert">Copied to clipboard</p>}
		</article>
	);
};

export default SingleColor;
