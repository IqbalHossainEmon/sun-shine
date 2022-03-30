import React, { useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
import { FcNext, FcPrevious } from "react-icons/fc";

const services = [
	{
		id: 0,
		title: "Learn Python: The Complete Python Programming Course",
		instructors: "Avinash Jain, The Codex",
		star: "4.5",
		price: "18.99",
		img: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
	},
	{
		id: 1,
		title: "Learning Python for Data Analysis and Visualization",
		instructors: "Jose Portilla",
		star: "4.8",
		price: "19.99",
		img: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
	},
	{
		id: 2,
		title: "Python for Beginners - Learn Programming from scratch",
		instructors: "Edwin Diaz, Coding Faculty Solutions",
		star: "3.2",
		price: "17.99",
		img: "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
	},
	{
		id: 3,
		title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
		instructors: "Admas Kinfu",
		star: "3.8",
		price: "18.85",
		img: "https://img-c.udemycdn.com/course/240x135/577248_3b6f_13.jpg",
	},
	{
		id: 4,
		title: "Python for Data Structures, Algorithms, and Interviews!",
		instructors: "Bryson Payne",
		star: "4.2",
		price: "18.99",
		img: "https://img-c.udemycdn.com/course/240x135/482754_7146_6.jpg",
	},
	{
		id: 5,
		title: "Automate the Boring Stuff with Python Programming",
		instructors: "Al Sweigart",
		star: "4.9",
		price: "16.99",
		img: "https://img-c.udemycdn.com/course/240x135/558096_af58_7.jpg",
	},
];

const Services = () => {
	const [servicePostion, setServicePostion] = useState(0);
	const width = window.innerWidth;
	const previous = () => {
		if (servicePostion > -63 && width > 1020) {
			setServicePostion(servicePostion - 21);
		} else if (servicePostion > -72 && width <= 1020) {
			setServicePostion(servicePostion - 18);
		} else if (servicePostion > -90 && width < 688) {
			setServicePostion(servicePostion - 18);
		}
	};
	const next = () => {
		if (servicePostion < 0 && width > 1020) {
			setServicePostion(servicePostion + 21);
		} else if (servicePostion < 0 && width <= 1020) {
			setServicePostion(servicePostion + 18);
		} else if (servicePostion > 0 && width < 688) {
			setServicePostion(servicePostion + 18);
		}
	};

	return (
		<div id='services' className='services container'>
			<div id='croper'>
				<div id='pre-next-button'>
					<button onClick={previous} id='pre-button'>
						<FcPrevious size={30} />
					</button>
					<button onClick={next} id='next-button'>
						<FcNext size={30} />
					</button>
				</div>
				<div className='services-main'>
					{services.map((data) => (
						<Service
							key={data.id}
							servicePostion={servicePostion}
							data={data}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
