import React from "react";
import "./CommingEvent.css";
import { GrLocation } from "react-icons/gr";
const CommingEvent = ({ data }) => {
	const { name, year, month, date, place, time } = data;
	return (
		<div className='CommingEvent'>
			<h1>
				<span>{date}</span>
				<sup>
					<small>th</small>
				</sup>
			</h1>
			<h5>
				{month}, {year}
			</h5>
			<p className='time'>{time}</p>
			<h4>{name}</h4>
			<p className='location'>
				<GrLocation color='#000' size='2rem' />

				{place}
			</p>
		</div>
	);
};

export default CommingEvent;
