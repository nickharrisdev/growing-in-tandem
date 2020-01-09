import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

const AllPlants = ({ allPlants }) => {
	function plantsList(plant) {
			return (<li data-testid="plant-name" key={plant}>{plant.name}</li>)
	}
	
	return (
		<Typography variant="h5" component="h1">
			<strong>All Plants:</strong>
			<ul>
				{allPlants.map(plantsList)}
			</ul>
		</Typography>
	)  
}
 
export default AllPlants;
