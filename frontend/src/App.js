import React from 'react';
import './App.css';

function App () {
	return (
		<div className="App">
			<h2>
				Guten Tag!!! ?
        </h2>
			<p> docker run -v /app/node_modules -p 1234:1234 -v $(pwd):/app 10a750b5f761</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
        </a>
		</div>
	);
}

export default App;
