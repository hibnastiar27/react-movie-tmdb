import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { fetchTvShows, fetchTvShowsAll, searchTv } from "../api";

const TvShowsPages = () => {
	const [tvShow, setTvShow] = useState([]);
	const [tvShowAll, setTvShowAll] = useState([]);

	useEffect(() => {
		const getTvShow = async () => {
			const tvShowData = await fetchTvShows();
			setTvShow(tvShowData);
		};

		const getTvShowAll = async () => {
			const tvShowData = await fetchTvShowsAll();
			setTvShowAll(tvShowData);
		};

		getTvShow();
		getTvShowAll();
	}, []);

	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	useEffect(() => {
		if (query.trim()) {
			const getSearchResults = async () => {
				const resultsData = await searchTv(query);
				setResults(resultsData);
			};

			getSearchResults();
		} else {
			setResults([]);
		}
	}, [query]);

	return (
		<div className="max-w-screen-xl mx-auto">
			<Navbar active={"TvShows"} />

			{/* Home */}
			<div className="w-1/2 space-y-3 mt-20">
				<p className="text-blue-500">NONTONS</p>
				<h1 className=" text-5xl font-semibold">TV Shows</h1>
				<div className="p-4 w-1/2 rounded-lg flex gap-3 items-center border border-gray-700 bg-black/10">
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
						className="w-full text-gray-400 placeholder:text-gray-600 bg-transparent focus-within:outline-none"
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search for Tv Shows"
					/>
				</div>
			</div>

			<h1 className="font-light my-4 text-gray-400">
				{tvShowAll.total_results} Items
			</h1>

			{/* content */}
			<div className="grid grid-cols-4 gap-6 w-full mb-20">
				{results.length > 0
					? results.map((item, index) => (
							<motion.div
								key={index}
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
					  ))
					: tvShow.map((item, index) => (
							<motion.div
								key={index}
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

export default TvShowsPages;
