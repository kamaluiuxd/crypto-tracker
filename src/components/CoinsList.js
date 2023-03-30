import { CircularProgress } from "@mui/material";

import { useCrypto } from "../context/CryptoContext";
import CryptoHomeCard from "./CryptoHomeCard";

const CoinsList = () => {
	const { search, setSearch, loading, coins } = useCrypto();

	return (
		<>
			<section className="bg-black p-20">
				<section className="container mx-auto text-center p-8">
					{/* Search box */}
					<input
						type="text"
						className="h-10 border-none p-4 rounded-full w-[40%] "
						value={search}
						placeholder={`Search from ${coins.length} Coins`}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</section>
				<section className="container mx-auto flex justify-center">
					{loading ? (
						<CircularProgress />
					) : (
						<section className="grid grid-cols-5">
							<CryptoHomeCard />
						</section>
					)}
				</section>
			</section>
		</>
	);
};
export default CoinsList;
