import { useCrypto } from "../context/CryptoContext";

const Header = () => {
	const { currency, setCurrency, symbol } = useCrypto();

	console.log(currency);
	return (
		<section className="bg-black p-5 text-white">
			<div className="flex items-center container	 mx-auto justify-around">
				<div>Crypto</div>
				<select name="" id="" value={currency} onChange={(e) => setCurrency(e.target.value)} className="text-black">
					<option value={"INR"}>INR</option>
					<option value={"USD"}>USD</option>
				</select>
			</div>
		</section>
	);
};
export default Header;
