import { Link } from "react-router-dom";
import { numberWithCommas } from "../config/api";
import { useCrypto } from "../context/CryptoContext";

const CarouselCard = ({ coin }) => {
	const { symbol } = useCrypto();
	const profit = coin.price_change_percentage_24h > 0;

	return (
		<section className="bg-zinc-900 m-4 py-5  rounded-md">
			<Link to={`/coins/${coin.id}`} className="flex flex-col items-center space-y-2">
				<img src={coin.image} alt={coin.name} className="w-10 h-10" />
				<span className="uppercase">{coin.symbol}</span>
				<span className="font-bold  px-2 py-1 rounded" style={{ color: profit ? "green" : "red" }}>
					{profit && "+"}
					{coin.price_change_percentage_24h.toFixed(2)}%
				</span>
				<span>
					{symbol} {numberWithCommas(coin.current_price.toFixed(2))}
				</span>
			</Link>
		</section>
	);
};
export default CarouselCard;
