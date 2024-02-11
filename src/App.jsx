// import { Navbar } from "./components";
import { useEffect, useState } from "react";
import {
	getNowPlaying,
	getGenre,
	getTrending,
} from "./services/product.service";
import HomePage from "./pages/HomePage";
function App() {
	const [datas, setDatas] = useState([]);
	const [genres, setGenres] = useState([]);
	const [trendings, setTrendings] = useState([]);
	useEffect(() => {
		getNowPlaying((data) => {
			setDatas(data);
		});
	}, []);
	useEffect(() => {
		getGenre((data) => {
			setGenres(data);
		});
	}, []);
	useEffect(() => {
		getTrending((data) => {
			setTrendings(data);
		});
	});
	return (
		<div>
			<HomePage datas={datas} genres={genres} trendings={trendings} />
		</div>
	);
}

export default App;
