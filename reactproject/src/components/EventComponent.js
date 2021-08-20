import React, { useState } from 'react';

/* class Event extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			id: 1,
		};

		this.handleAbc = this.handleAbc.bind(this);
	}

	render() {
		return <React.Fragment></React.Fragment>;
	}
} 

export default Event;
*/

const EventComponent = () => {
	// const [day, setDay] = useState(23);
	// const [month, setMonth] = useState(12);
	// const [year, setYear] = useState(2020);
	let dateInitiate = {
		day: 23,
		month: 5,
		year: 2020,
	};

	const [date, setDate] = useState(dateInitiate);

	const handleDateChange = () => {
		/* setDay(10);
		setMonth(5);
		setYear(2021); */
		setDate({
			day: 1,
			month: 1,
			year: 2000,
		});
	};

	return (
		<>
			<h1>Blah Bloo</h1>
			<p>
				Date: {date.day}/{date.month}/{date.year}
			</p>
			<button type="button" onClick={handleDateChange}>
				Click Here to Change Date
			</button>
		</>
	);
};

export default EventComponent;
