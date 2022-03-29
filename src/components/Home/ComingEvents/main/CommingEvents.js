import React from "react";
import CommingEvent from "../CommingEvent/CommingEvent";
import "./CommingEvents.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const events = [
	{
		year: 2022,
		date: 9,
		month: "sep",
		time: "09:00 AM - 12:00 AM",
		name: "Computing Education Practice Conference 2022",
		place: "New York, USA",
	},
	{
		year: 2022,
		date: 12,
		month: "sep",
		time: "09:00 AM - 12:00 AM",
		name: "Learning Counsel Digital Transition Discussion",
		place: "New York, USA",
	},
	{
		year: 2022,
		date: 17,
		month: "sep",
		time: "09:00 AM - 12:00 AM",
		name: "Our Excellence Partner and France Pavilion 2023",
		place: "New York, USA",
	},
	{
		year: 2023,
		date: 14,
		month: "jan",
		time: "09:00 AM - 12:00 AM",
		name: "Ecosystem dynamics and conservation seminar",
		place: "New York, USA",
	},
];

const CommingEvents = () => {
	return (
		<div id='events' className='commingEvents'>
			<h1>Upcoming Events</h1>
			<div>
				{events.map((data, i) => (
					<CommingEvent key={i} data={data} />
				))}
			</div>
			<button>
				View All Event <HiArrowNarrowRight />
			</button>
		</div>
	);
};

export default CommingEvents;
