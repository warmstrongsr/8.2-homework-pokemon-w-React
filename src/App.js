import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ToDo from './views/ToDo';
import PokemonData from './views/PokemonData';


export default function App() {
    return (
		<div className="App">
				<Navbar />
				<div className="container">
					<ToDo />
					<Routes>
						<Route path="/" element={<ToDo  />} />
						<Route path="/pokemon" element={<PokemonData />} />
					</Routes>
				</div>
			</div>
		);
}
