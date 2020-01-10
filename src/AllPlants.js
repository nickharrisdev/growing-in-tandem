import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';

const AllPlants = ({ allPlants }) => {
	function plantsList(plant, index) {
			return (<div data-testid="plant-name" key={index}>{plant.name}</div>)
	}
	
	return (
		<div className="all-plants-container">
			<div className="all-plants">
				<Typography variant="h5" component="h1">
					<strong>All Plants</strong>
					<div>
						{allPlants ? allPlants.map(plantsList) : null}
					</div>
				</Typography>
			</div>
			<Link to="/">
        <p>calendar view</p>
      </Link>
		</div>
	)  
}
 
export default withRouter(AllPlants);
