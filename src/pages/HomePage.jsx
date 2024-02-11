import Card from "../components/Card";
import Navbar from "../components/Navbar";

function HomePage(props) {
	const { datas, genres } = props;
	return (
		<>
			<Navbar />
			<div className="max-w-7xl m-auto mt-5">
				<div className="grid grid-cols-4 gap-4 ">
					<Card datas={datas} genres={genres} />
				</div>
			</div>
		</>
	);
}

export default HomePage;
