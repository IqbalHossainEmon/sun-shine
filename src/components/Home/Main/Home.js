import React from "react";
import CommingEvents from "../ComingEvents/main/CommingEvents";
import Banner from "../Header/Banner/main/Banner";
import OurDetails from "../OurDetails/main/OurDetails";
import Services from "../Services/main/Services";
import Footer from "../../Footer/Footer";

const Home = () => {
	return (
		<div>
			<Banner />
			<Services />
			<OurDetails />
			<CommingEvents />
			<Footer />
		</div>
	);
};

export default Home;
