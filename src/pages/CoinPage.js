import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinChart from "../components/CoinChart";
import CoinSingle from "../components/CoinSingle";
import { SingleCoin } from "../config/api";
import { useCrypto } from "../context/CryptoContext";

const CoinPage = () => {
	const { id } = useParams();

	const [coin, setCoin] = useState();
	const { currency, symbol } = useCrypto();

	const fetchCoin = async () => {
		const { data } = await axios.get(SingleCoin(id));
		setCoin(data);
	};

	useEffect(() => {
		fetchCoin();
	}, []);

	console.log(coin);

	return (
		<div>
			<section className="grid grid-cols-4">
				<div className="col-span-1 flex justify-center items-center ">
					<CoinSingle coin={coin} />
				</div>
				<div className="col-span-3">
					<CoinChart />
				</div>
			</section>
		</div>
	);
};
export default CoinPage;
