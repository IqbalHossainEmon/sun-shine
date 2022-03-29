import React from "react";
import OurDetail from "../OurDetail/OurDetail";
import "./OurDetails.css";

const ourDetails = [
	{
		id: 1,
		heading: "Successfully Trained",
		num: 570,
		extra: "ENROLLED LEARNERS",
	},
	{
		id: 2,
		heading: "Available Courses",
		num: 221,
		extra: "COUNTRYWIDE AWARDS",
	},
	{ id: 3, heading: "Scheduled Events", num: 321, extra: "SUCCESS EVENTS" },
	{ id: 4, heading: "Getting Featured on", num: 411, extra: "ONLINE COURSES" },
];

const OurDetails = () => {
	return (
		<div id='details' className='ourDetails'>
			{ourDetails.map((data) => (
				<OurDetail key={data.id} data={data} />
			))}
		</div>
	);
};

export default OurDetails;
