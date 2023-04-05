import React from "react";

export default function PokeForm({updatePokemon}) {
	const handleFormSubmit = (event) => {
		event.preventDefault();
		let pokemon = event.target.pokemon.value; 
		updatePokemon(pokemon);
		event.target.pokemon.value = ""; 
	};

	return (
		<form action="" className="row my-3" onSubmit={handleFormSubmit}>
			<div className="col-12 col-md-5">
				<input
					type="text"
					name="pokemon" 
					className="form-control"
					placeholder="Enter Pokemon name"
				/>
			</div>

			<div className="col">
				<input type="submit" value="Search" className="btn btn-success w-100" />
			</div>
		</form>
	);
}
