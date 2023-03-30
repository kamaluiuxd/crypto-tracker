import { Link } from "react-router-dom";
import { numberWithCommas } from "../config/api";
import { useCrypto } from "../context/CryptoContext";

const CryptoHomeCard = () => {
	const { symbol, coins, search } = useCrypto();

	const handleSearch = () => {
		return coins.filter(
			(coin) => coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
		);
	};

	return (
		<>
			{handleSearch().map((res) => {
				const profit = res.price_change_percentage_24h > 0;
				return (
					<section className="bg-zinc-900 w-[10em] m-4 py-5 rounded-md">
						<Link to={`/coins/${res.id}`} className="flex flex-col items-center space-y-2">
							<img src={res.image} alt={res.name} className="w-10 h-10" />
							<span className="uppercase text-white">{res.symbol}</span>
							<span className="font-bold  px-2 py-1 rounded " style={{ color: profit ? "green" : "red" }}>
								{profit && "+"}
								{res.price_change_percentage_24h.toFixed(2)}%
							</span>
							<span className="text-white">
								{symbol} {numberWithCommas(res.current_price.toFixed(2))}
							</span>
						</Link>
					</section>
				);
			})}
		</>
	);
};
export default CryptoHomeCard;
