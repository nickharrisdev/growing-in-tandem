import React, { useState } from 'react';
import { addPlant } from './lib/fetchPlants';
import Typography from '@material-ui/core/Typography';

function AddPlantForm ({ toggleAddingPlant }) {
	const [days, setDays] = useState();
	const [name, setName] = useState();
	const [error, toggleError] = useState(false);

	function handleSubmit() {
		const daysNum = parseInt(days);
		if (!(Number.isInteger(daysNum))) {
			toggleError(true);
		} else {
			addPlant(name, days);
			setName('');
			setDays('');
			toggleError(false);
			toggleAddingPlant(true);
		}
}

	function handleNameChange(x) {
		setName(x);
	}
	
	function handleDaysChange(x) {
		setDays(x);
	}

	function displayError() {
		return (
			<p>Please enter a number</p>
		)
	}

	return (
		<div>
			<Typography variant="h5" component="h1"><strong>Add a plant</strong></Typography>
			<div>
				<label htmlFor="name-input">
					Plant name
					<input type="text" onChange={e => handleNameChange(e.target.value)} value={name || ''} id="name-input" />
				</label>
				<br></br>
				<label htmlFor="days-input">
					Water after
					<input type="text" onChange={e => handleDaysChange(e.target.value)} value={days || ''} id="days-input" />
				</label>
				<br></br>
				{error ? displayError() : null}
			</div>
			<button type="button" onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default AddPlantForm;
