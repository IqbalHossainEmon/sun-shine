import React, { useEffect, useRef, useState } from "react";
import BannerItem from "../Item/BannerItem";
import "./Banner.css";
const banner = [
	{
		id: 0,
		img: "images/banner/banner-5.svg",
		heading: "First, solve the problem. Then, write the code.",
	},
	{
		id: 1,
		img: "images/banner/banner-2.svg",
		heading: "Expand your career opportunities with Python",
		para: "",
	},
	{
		id: 2,
		img: "images/banner/banner-3.svg",
		heading: "Learn Effectively that will take towards your goal",
		para: "",
	},
	{
		id: 3,
		img: "images/banner/banner-4.svg",
		heading: "We will ensure our graduates are world-class web developer.",
		para: "",
	},
	{
		id: 4,
		img: "images/banner/banner-1.svg",
		heading: "Master everything you need to become a web developer.",
		para: "",
	},
];

const Banner = () => {
	const [currentBanner, setCurrentBanner] = useState(banner[0].id);
	const timeoutRef = useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	const arrayLength = banner.length;
	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(() => {
			if (currentBanner === arrayLength - 1) {
				setCurrentBanner(banner[0].id);
			} else {
				setCurrentBanner(currentBanner + 1);
			}
		}, 7000);
	}, [currentBanner]);
	return (
		<div id='banner'>
			<div className='container'>
				{banner.map((data) => (
					<BannerItem currentBanner={currentBanner} key={data.id} data={data} />
				))}
			</div>
			<div className='nav-button-container'>
				{banner.map((data) => (
					<button
						key={data.id}
						id={data.id === currentBanner ? "active-nav-button" : ""}
						className='bannerNavigator'
						onClick={() => setCurrentBanner(data.id)}></button>
				))}
			</div>
		</div>
	);
};

export default Banner;
