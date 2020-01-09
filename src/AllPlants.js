import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

const AllPlants = ({ allPlants }) => {
	function plantsList(plant) {
			return (<div data-testid="plant-name" key={plant}>{plant.name}</div>)
	}
	
	return (
		<div className="all-plants-container">
			<div className="all-plants">
				<Typography variant="h5" component="h1">
					<strong>All Plants</strong>
					<div>
						{allPlants.map(plantsList)}
					</div>
				</Typography>
			</div>
		</div>
	)  
}
 
export default AllPlants;
