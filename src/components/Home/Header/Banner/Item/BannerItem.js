import "./BannerItem.css";

const BannerItem = ({ data, currentBanner }) => {
	const { img, id, heading } = data;
	return (
		<div id='banner-item'>
			<div
				className={id % 2 !== 0 ? "flex-rev banner-item" : "banner-item"}
				id={currentBanner === id ? "op-1" : "op-0"}>
				<div className='banner-text'>
					<h1 className='h-font'>{heading}</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
						asperiores quibusdam architecto sunt dicta ea quasi quia fugiat esse
						quod possimus dolore totam maiores, eum consequuntur, voluptates
						modi aut eveniet.
					</p>
				</div>
				<div className='banner-img'>
					<img src={img} alt='' />
				</div>
			</div>
		</div>
	);
};

export default BannerItem;
