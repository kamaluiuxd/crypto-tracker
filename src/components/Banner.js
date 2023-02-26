import Carousel from "./Carousel";

const Banner = () => {
	return (
		<div>
			<div className="px-10 bg-black w-full text-teal-50 flex justify-center items-center flex-col space-y-5">
				<h1 className="font-bold text-5xl">Crypto Cave</h1>
				<p>Get all crypto details</p>
				<Carousel />
			</div>
		</div>
	);
};
export default Banner;
