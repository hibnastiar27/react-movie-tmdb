import Card from "../components/Card";
import Navbar from "../components/Navbar";

function HomePage(props) {
	const { datas, genres, trendings } = props;
	return (
		<>
			<Navbar />
			<div className="flex flex-col gap-10">
				<div className="max-w-7xl m-auto mt-5">
					<div className="flex justify-between items-center">
						<h1 className="text-3xl font-bold">NOW PLAYING</h1>
						<a href="">See More</a>
					</div>
					<div className="grid grid-cols-4 gap-4 ">
						<Card jmlData={4} genres={genres} datas={datas} />
					</div>
				</div>
				<div className="max-w-7xl m-auto mt-5">
					<div className="flex justify-between items-center">
						<h1 className="text-3xl font-bold">TRENDING</h1>
						<a href="">See More</a>
					</div>
					<div className="grid grid-cols-4 gap-4 ">
						<Card jmlData={4} trendings={trendings} genres={genres} />
					</div>
				</div>
			</div>
		</>
	);
}

export default HomePage;
