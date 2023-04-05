import React, { useEffect, useState } from "react";
import PokeTable from "../components/PokeTable";
import PokeForm from "../components/PokeForm";

export default function PokemonData() {
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		if (pokemon.length === 0) return;
		const latestPokemon = pokemon[pokemon.length - 1];
		console.log(`Fetching data for ${latestPokemon.name}`);
		fetch(`https://pokeapi.co/api/v2/pokemon/${latestPokemon.name}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPokemon((prevPokemon) => {
					const newPokemon = [...prevPokemon];
					const index = newPokemon.findIndex((p) => p.name === data.name);
					if (index !== -1) {
						newPokemon[index] = {
							name: data.name,
							height: data.height,
							weight: data.weight,
						};
					} else {
						newPokemon.push({
							name: data.name,
							height: data.height,
							weight: data.weight,
						});
					}
					return newPokemon;
				});
			});
	}, [pokemon]);

	const addPokemon = (newPokemonName) => {
		setPokemon((prevPokemon) => [...prevPokemon, { name: newPokemonName }]);
	};

	return (
		<div>
			<h1 className="text-center">Pokemon</h1>
			<PokeForm updatePokemon={addPokemon} />
			<PokeTable pokemon={pokemon} />
		</div>
	);
}
