import React from "react";

export default function PokeTable({ pokemon }) {
	const tableHeaders = ["Name", "Height", "Weight"];

	return (
		<table className="table table-primary table-striped">
			<thead>
				<tr>
					{tableHeaders.map((header) => (
						<th key={header}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{pokemon.map(({ name, height, weight }) => (
					<tr key={name}>
						<td>{name}</td>
						<td>{height}</td>
						<td>{weight}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
