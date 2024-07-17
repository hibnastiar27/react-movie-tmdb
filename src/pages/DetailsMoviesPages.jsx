import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchMovieDetail, IMG_URL } from "../api";
import { ImgStar } from "../assets";

const DetailsMoviesPages = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		const getMovieDetail = async () => {
			const movieData = await fetchMovieDetail(id);
			setMovie(movieData);
		};

		getMovieDetail();
	}, [id]);

	if (!movie) return <div>Loading...</div>;

	return (
		<div className="max-w-screen-xl mx-auto">
			<Navbar />

			{/* Home */}
			<div className="relative mt-10">
				<img
					className="w-full h-[480px] object-cover object-top rounded-3xl "
					src={IMG_URL + movie.backdrop_path}
					alt={movie.title || movie.name}
				/>
				<div className="absolute w-fit rounded-2xl  -bottom-12 left-10 p-10 bg-black/20 backdrop-blur-lg">
					<div className="flex gap-3 text-sm items-center font-light text-blue-200">
						<p>Home</p>
						<p>/</p>
						<p>Movies</p>
					</div>
					<h1 className="text-4xl font-semibold">
						{movie.title || movie.name}
					</h1>
				</div>
			</div>

			{/* Details */}
			<div className="grid grid-cols-2 gap-20 mt-20 p-20 ">
				<img
					className="w-full  rounded-2xl shadow-2xl"
					src={IMG_URL + movie.poster_path}
					alt=""
				/>
				<div className="space-y-5">
					<h1 className="text-xl font-semibold">{movie.tagline}</h1>
					<p className="text-gray-400 font-light leading-relaxed">
						{movie.overview}
					</p>

					<span className="rounded-lg top-1 left-1 flex items-center gap-2 p-2 text-yellow-500 bg-black/50 backdrop-blur-lg w-fit">
						<img src={ImgStar} alt="" />
						<p>{movie.vote_average}</p>
					</span>

					<div className="space-y-3">
						<p className="text-gray-400">Type</p>
						<h1 className="text-xl text-gray-300">Movie</h1>
					</div>

					<div className="space-y-3">
						<p className="text-gray-400">Release Date:</p>
						<h1 className="text-xl text-gray-300">{movie.release_date}</h1>
					</div>

					<div className="space-y-3">
						<p className="text-gray-400">Run time</p>
						<h1 className="text-xl text-gray-300">{movie.runtime} min</h1>
					</div>

					<div className="space-y-3">
						<p className="text-gray-400">Genres</p>
						<h1 className="text-xl text-gray-300">
							{movie.genres.map((genre) => genre.name).join(", ")}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsMoviesPages;
