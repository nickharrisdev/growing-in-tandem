import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';

const AllPlants = ({ allPlants }) => {
	function plantsList(plant, index) {
			return (<div data-testid="plant-name" key={index}>{plant.name}</div>)
	}
	
	return (
		<div>
			<div className="all-plants-container">
				<div className="all-plants">
					<Typography variant="h5" component="h1">
						<strong>All Plants</strong>
						<div>
							{allPlants ? allPlants.map(plantsList) : null}
						</div>
					</Typography>
				</div>
			</div>
			<div className="link-container">
				<Link to="/" className="link-component">
					<p className="link">View Calendar</p>
				</Link>
			</div>
		</div>
	)  
}
 
export default withRouter(AllPlants);
