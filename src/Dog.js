import React from 'react';
import './Dog.css';

function Dog() {
	const dog =
		'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60';
	return (
		<div className="Dog">
			<h2>Cute Dog</h2>
			<img className="Dog-img" src={dog} />
		</div>
	);
}

export default Dog;
