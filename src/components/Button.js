import React from 'react';
import './Button.css';

const Button = ({ imp, text }) => {
	return (
		<div className={`button ${imp === 'secondary' ? 'button__white' : ''}`}>
			<p>{text}</p>
		</div>
	);
};

export default Button;
