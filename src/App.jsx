import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
	HomePages,
	MoviePages,
	TvShowsPages,
	DetailsMoviesPages,
	DetailsTvShowPages,
} from "./pages";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<HomePages />} />
					<Route path="/movies" element={<MoviePages />} />
					<Route path="/movies/:id" element={<DetailsMoviesPages />} />
					<Route path="/tvshows" element={<TvShowsPages />} />
					<Route path="/tvshows/:id" element={<DetailsTvShowPages />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
