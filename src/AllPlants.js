import React from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link, withRouter } from 'react-router-dom';

const AllPlants = ({ allPlants, toggleAddingPlant }) => {
	
	const deleteItem = id => {
    let confirmDelete = window.confirm('Delete plant?')
    if(confirmDelete){
      fetch('https://calm-cliffs-46733.herokuapp.com/plants', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
      .then(response => response.json())
      .then(item => {
        console.log(item)
			})
			.then(toggleAddingPlant(true))
      .catch(err => console.log(err))
		}
	}
	
	function plantsList(plant, index) {
		return (
			<TableRow key={index}>
				<TableCell align="left">
					<p className="cell-content">{plant.name}</p>
				</TableCell>
				<TableCell>
					<p className="cell-content">{plant.days} days</p>
				</TableCell>
				<TableCell>
					<button className="delete-btn" type="button" onClick={() => deleteItem(plant.id)}>X</button>
				</TableCell>
			</TableRow>
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
