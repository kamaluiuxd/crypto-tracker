import { LinearProgress, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CoinList } from "../config/api";
import { useCrypto } from "../context/CryptoContext";
import { numberWithCommas } from "./Carousel";

const CoinsTable = () => {
	const { currency, symbol } = useCrypto();
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);

	//Fetch Coins
	const fetchCoins = async () => {
		setLoading(true);
		const { data } = await axios.get(CoinList(currency));
		setCoins(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchCoins();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currency]);

	//Search Coins
	const handleSearch = () => {
		return coins.filter((coin) => coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search));
	};

	return (
		<>
			<section className="bg-black p-20">
				<section className="container mx-auto text-center p-8">
					{/* Search box */}
					<TextField
						label="Search for Crypto currency..."
						type="text"
						varient="filled"
						color=""
						className="w-[80%]"
						inputProps={{ style: { color: "white" } }}
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</section>
				<section className="container mx-auto">
					<TableContainer>
						{loading ? (
							<LinearProgress sx={{ backgroundColor: "red" }} />
						) : (
							<Table>
								<TableHead>
									<TableRow>
										{["Coin", "Price", "24h Change", "Market Cap", "View"].map((head) => (
											<TableCell className="bg-black text-white" sx={{ color: "#ffffff" }}>
												{head}
											</TableCell>
										))}
									</TableRow>
								</TableHead>
								<TableBody>
									{handleSearch()
										.slice((page - 1) * 10, (page - 1) * 10 + 10)
										.map((row) => {
											const profit = row.price_change_percentage_24h > 0;
											return (
												<TableRow key={row.name} sx={{ backgroundColor: "#000000", color: "#ffffff" }}>
													<TableCell component="th">
														<div className="flex items-center text-white">
															<img src={row.image} alt={row.name} className="h-[80px] " />
															<div className="flex flex-col ml-2">
																<p className="text-xl font-bold uppercase">{row.symbol}</p>
																<p className="">{row.name}</p>
															</div>
														</div>
													</TableCell>
													<TableCell component="th">
														<p className="text-white">
															{symbol} {numberWithCommas(row.current_price.toFixed(2))}
														</p>
													</TableCell>
													<TableCell component="th">
														<p style={{ color: profit ? "green" : "red" }}>
															{profit && "+"}
															{row.price_change_percentage_24h.toFixed(2)}%
														</p>
													</TableCell>
													<TableCell component="th">
														<p className="text-white">
															{symbol}&nbsp;
															{numberWithCommas(row.market_cap.toString().slice(0, -6))} M
														</p>
													</TableCell>
													<TableCell component="th">
														<Link to={`/coins/${row.id}`}>
															<button className="text-white">View Coin</button>
														</Link>
													</TableCell>
												</TableRow>
											);
										})}
								</TableBody>
							</Table>
						)}
					</TableContainer>
					<div className="space-x-8 m-10">
						<Pagination
							shape="rounded"
							size="large"
							showFirstButton
							showLastButton
							variant="outlined"
							style={{ display: "flex", justifyContent: "center" }}
							count={(handleSearch()?.length / 10).toFixed(0)}
							onChange={(_, value) => {
								setPage(value);
								window.scroll(0, 450);
							}}
						/>
					</div>
				</section>
			</section>
		</>
	);
};
export default CoinsTable;
