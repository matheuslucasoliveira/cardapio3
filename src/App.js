import React from 'react';
import MenuItem from './components/MenuItem';
import { menuItems } from './data';
import './styles.css';

function App() {
	return (
		<div className="container">
			<h1 className="menu-title">Nosso Cardápio</h1>
			<div className="menu-grid">
				{menuItems.map(item => (
					<MenuItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
}

export default App;
