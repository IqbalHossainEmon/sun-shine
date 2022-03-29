import React from "react";
import CountUp from "react-countup";
import "./OurDetail.css";

const OurDetail = ({ data }) => {
	const { heading, num, extra, id } = data;
	return (
		<div className='ourDetail'>
			<div
				className={id === 4 ? "border-left" : "border-right"}
				id={id === 3 ? "no-border" : ""}>
				<h2 className='h-font'>{heading}</h2>
				<CountUp className='num' end={num} />
				<p>
					<small>{extra}</small>
				</p>
			</div>
		</div>
	);
};

export default OurDetail;
