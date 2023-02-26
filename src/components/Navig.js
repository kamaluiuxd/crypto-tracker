import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const Navig = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};
export default Navig;
