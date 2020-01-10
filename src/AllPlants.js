import React from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link, withRouter } from 'react-router-dom';

const AllPlants = ({ allPlants }) => {
	function plantsList(plant, index) {
			return (
				<div data-testid="plant-name" key={index}>
					<TableRow>
						<TableCell align="left">
							<p class="cell-content">{plant.name}</p>
						</TableCell>
						<TableCell>
							<p className="cell-content">{plant.days} days</p>
						</TableCell>
						<TableCell>
							<button className="delete-btn" type="button">X</button>
						</TableCell>
					</TableRow>
				</div>
			);
	}
	
	return (
		<div>
			<div className="link-container">
				<Link to="/" className="link-component">
					<p className="link">View Calendar</p>
				</Link>
			</div>
			<div className="all-plants-container">
				<div className="all-plants">
					<Typography variant="h5" component="h1">
						<strong>All Plants</strong>
						<div>
							<Table>
								<TableBody>
									{allPlants ? allPlants.map(plantsList) : null}
								</TableBody>
							</Table>
						</div>
					</Typography>
				</div>
			</div>
		</div>
	)  
}
 
export default withRouter(AllPlants);
