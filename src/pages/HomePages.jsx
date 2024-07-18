import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { fetchMovies, fetchAll, fetchTvShows, search } from "../api";

const HomePages = () => {
	const tabList = ["All", "Movies", "TV Shows"];
	const [all, setAll] = useState([]);
	const [movies, setMovies] = useState([]);
	const [tvShows, setTvShows] = useState([]);

	useEffect(() => {
		const getAll = async () => {
			const allData = await fetchAll();
			setAll(allData);
		};

		const getMovies = async () => {
			const movieData = await fetchMovies();
			setMovies(movieData);
		};

		const getTvShows = async () => {
			const tvData = await fetchTvShows();
			setTvShows(tvData);
		};
		getTvShows();
		getAll();
		getMovies();
	}, []);

	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	useEffect(() => {
		if (query.trim()) {
			const getSearchResults = async () => {
				const resultsData = await search(query);
				setResults(resultsData);
			};

			getSearchResults();
		} else {
			setResults([]);
		}
	}, [query]);

	const [tab, setTab] = useState(0);

	const syncMediaType = (media) => {
		switch (media) {
			case "tv":
				return "tvshows";
			case "movie":
				return "movies";
			default:
				return "all";
		}
	};

	return (
		<div className="max-w-screen-xl mx-auto">
			<Navbar active={"Home"} />

			{/* Home */}
			<div className="w-1/2 space-y-3 my-20">
				<h1 className=" text-5xl font-semibold">All Movies & Tv Shows</h1>
				<p className="text-gray-400">
					Discover your favorite movies and tv shows.
				</p>
				<div className="p-4  rounded-lg flex gap-3 items-center border border-gray-700 bg-black/10">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
							stroke="#475069"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M22 22L20 20"
							stroke="#475069"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						className="w-full text-gray-400 placeholder:text-gray-600 bg-transparent focus-within:outline-none"
						placeholder="Search for movies or TV Shows..."
					/>
				</div>
			</div>

			{/* tab */}
			<div className="flex gap-3 p-2 bg-black/10 w-fit rounded-lg *:rounded-lg *:px-6 *:py-2 border border-gray-700 mb-10">
				{tabList.map((item, index) => (
					<motion.button
						animate={{ scale: tab === index ? 1 : 0.9 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
						onClick={() => setTab(index)}
						className={`text-gray-400 ${
							tab === index && "text-white bg-blue-400"
						}`}>
						{item}
					</motion.button>
				))}
			</div>

			{/* content */}
			<div className="grid grid-cols-4 gap-6 w-full mb-20">
				{results.length > 0
					? results.map((item) => (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1, ease: "easeInOut" }}>
								<Link to={`/${syncMediaType(item.media_type)}/${item.id}`}>
									<Card
										kunci={item.id}
										title={item.name || item.title}
										rating={item.vote_average}
										imgThumb={item.poster_path}
									/>
								</Link>
							</motion.div>
						))
					: tabList[tab] === "All"
						? all.map((item) => (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1, ease: "easeInOut" }}>
									<Link to={`/${syncMediaType(item.media_type)}/${item.id}`}>
										<Card
											kunci={item.id}
											title={item.name || item.title}
											rating={item.vote_average}
											imgThumb={item.poster_path}
										/>
									</Link>
								</motion.div>
							))
						: tabList[tab] === "Movies"
							? movies.map((item) => (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 1, ease: "easeInOut" }}>
										<Link to={`/movies/${item.id}`}>
											<Card
												kunci={item.id}
												title={item.name || item.title}
												rating={item.vote_average}
												imgThumb={item.poster_path}
											/>
										</Link>
									</motion.div>
								))
							: tvShows.map((item) => (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 1, ease: "easeInOut" }}>
										<Link to={`/tvshows/${item.id}`}>
											<Card
												kunci={item.id}
												title={item.name || item.title}
												rating={item.vote_average}
												imgThumb={item.poster_path}
											/>
										</Link>
									</motion.div>
								))}
			</div>
		</div>
	);
};

export default HomePages;
