/* eslint-disable react-hooks/exhaustive-deps */
import AliceCarousel from "react-alice-carousel";
import { useCrypto } from "../context/CryptoContext";
import CarouselCard from "./CarouselCard";

const Carousel = () => {
	const { trend } = useCrypto();
	const items = trend.map((coin) => {
		return (
			<div className="text-center">
				<CarouselCard coin={coin} />
			</div>
		);
	});

	console.log(items);

	const responsive = {
		0: { items: 2 },
		512: { items: 4 },
	};

	return (
		<div className="w-[800px]">
			<AliceCarousel
				mouseTracking
				infinite
				autoPlayInterval={1000}
				animationDuration={1500}
				disableDotsControls
				disableButtonsControls
				responsive={responsive}
				autoPlay
				items={items}
			/>
		</div>
	);
};
export default Carousel;
