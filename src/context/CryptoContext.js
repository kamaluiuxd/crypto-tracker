/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { CoinList, TrendingCoins } from "../config/api";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
	const [currency, setCurrency] = useState("INR");
	const [symbol, setSymbol] = useState("₹");
	const [trend, setTrend] = useState([]);
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);

	const fetchTrendCoins = async () => {
		const { data } = await axios.get(TrendingCoins(currency));
		setTrend(data);
	};
	//Fetch Coins
	const fetchCoins = async () => {
		setLoading(true);
		const { data } = await axios.get(CoinList(currency));
		setCoins(data);
		setLoading(false);
	};

	useEffect(() => {
		currency === "INR" ? setSymbol("₹") : setSymbol("$");
		fetchTrendCoins();
		fetchCoins();
	}, [currency]);

	return (
		<Crypto.Provider value={{ currency, setCurrency, symbol, trend, setTrend, coins, search, setSearch, page, setPage, loading }}>
			{children}
		</Crypto.Provider>
	);
};
export default CryptoContext;

export const useCrypto = () => {
	return useContext(Crypto);
};
