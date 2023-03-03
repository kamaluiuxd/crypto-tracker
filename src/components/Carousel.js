import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../config/api";
import { useCrypto } from "../context/CryptoContext";

export function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
	const { currency, symbol } = useCrypto();

	const [trend, setTrend] = useState([]);

	const fetchTrendCoins = async () => {
		const { data } = await axios.get(TrendingCoins(currency));
		setTrend(data);
	};
	useEffect(() => {
		fetchTrendCoins();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currency]);

	// console.log(trend);

	const responsive = {
		0: { items: 2 },
		512: { items: 4 },
	};

	const items = trend.map((coin) => {
		const profit = coin.price_change_percentage_24h > 0;

		return (
			<div className="text-center">
				<Link to={`/coins/${coin.id}`} className="flex flex-col items-center space-y-2">
					<img src={coin.image} alt={coin.name} className=" w-[80px]" />
					<span>{coin.symbol}</span>
					<span className="font-bold  px-2 py-1 rounded" style={{ color: profit ? "green" : "red" }}>
						{profit && "+"}
						{coin.price_change_percentage_24h.toFixed(2)}%
					</span>
					<span>
						{symbol} {numberWithCommas(coin.current_price.toFixed(2))}
					</span>
				</Link>
			</div>
		);
	});

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
