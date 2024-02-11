// import { Navbar } from "./components";
import { useEffect, useState } from "react";
import {
	getNowPlaying,
	getGenre,
	getDetails,
} from "./services/product.service";
import HomePage from "./pages/HomePage";
function App() {
	const [datas, setDatas] = useState([]);
	const [genres, setGenres] = useState([]);
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
	return (
		<div>
			<HomePage datas={datas} genres={genres} />
		</div>
	);
}

export default App;
