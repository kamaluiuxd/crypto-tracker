/* eslint-disable eqeqeq */
import { CircularProgress } from "@mui/material";
import parse from "html-react-parser";
import { numberWithCommas } from "../config/api";
import { useCrypto } from "../context/CryptoContext";

const CoinSingle = ({ coin }) => {
	const { currency, symbol } = useCrypto();

	if (!coin)
		return (
			<div className="flex justify-center items-center h-[400px]">
				<CircularProgress />
			</div>
		);
	if (undefined != coin) {
		return (
			<div>
				<section>
					<img src={coin.image.large} alt={coin.name} />
					<h1 className="uppercase">{coin.symbol}</h1>
					<h1>{coin.name}</h1>
					<p>Rank {coin.market_cap_rank}</p>
					<p>{parse(coin.description.en.split(". ")[0])}</p>
					<p>
						Current Price {symbol} {numberWithCommas(coin.market_data.current_price[currency.toLowerCase()])}
					</p>
					<p>
						Market Cap {symbol} {numberWithCommas(coin.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))} M
					</p>
				</section>
			</div>
		);
	}
};
export default CoinSingle;
