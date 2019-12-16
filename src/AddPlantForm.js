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
		} else if (name === '' || name=== ' ') {
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
			<p className="error">Please enter plant name and a number of days</p>
		)
	}

	return (
		<div className="add-plant-form">
			<Typography variant="h5" component="h1"><strong>Add Plant</strong></Typography>
			<div>
				<div className="plant-name">
					<label htmlFor="name-input" >
						Plant Name
						<br></br>
						<input type="text" onChange={e => handleNameChange(e.target.value)} value={name || ''} id="name-input" />
					</label>
				</div>
				<br></br>
				<div className="watering-freq">
					<label htmlFor="days-input" >
						Watering Frequency (Days)
						<br></br>
						<input type="text" onChange={e => handleDaysChange(e.target.value)} value={days || ''} id="days-input" />
					</label>
				</div>
				<br></br>
				{error ? displayError() : null}
			</div>
			<button className="submit-btn" type="button" onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default AddPlantForm;
