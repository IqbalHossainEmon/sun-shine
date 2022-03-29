import React from "react";
import StarRatings from "react-star-ratings/build/star-ratings";
import "./Service.css";

const Service = ({ data, servicePostion }) => {
	const { img, price, star, instructors, title } = data;
	const service = {
		transform: `translate(${servicePostion}rem)`,
	};

	return (
		<div style={service} className='service'>
			<div className='service-img'>
				<img src={img} alt='' />
			</div>
			<div className='service-info'>
				<h4 className='service-info-margin'>{title}</h4>
				<p>
					<small>{instructors}</small>
				</p>
				<div style={{ display: "flex", alignItems: "center" }}>
					<StarRatings
						rating={parseFloat(star)}
						starEmptyColor='#aa952950'
						starRatedColor='#FF9529'
						starDimension='1rem'
						starSpacing='.1rem'
					/>
					<p>({star})</p>
				</div>
				<h3 className='service-info-margin'>$ {price}</h3>
				<button className='buy-now-btn'>Buy now</button>
			</div>
		</div>
	);
};

export default Service;
