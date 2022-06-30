import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import foods from './food';
import { choice, remove } from './helpers';

let food = choice(foods);
console.log(`I'd like one ${food}, please`);
console.log(`Here you go: ${food}`);
console.log('Delicious!!! May I have another?');
let remaining = remove(foods, food);
console.log(`Sorry we have only: ${remaining}`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
