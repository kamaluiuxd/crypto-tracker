import { Route, Routes } from "react-router-dom";
import CoinPage from "../pages/CoinPage";
import Home from "../pages/Home";

const Navig = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/coins/:id" element={<CoinPage />} />
		</Routes>
	);
};
export default Navig;
