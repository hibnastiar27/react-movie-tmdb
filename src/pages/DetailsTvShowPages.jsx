import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchTvShowDetail, IMG_URL } from "../api";
import { ImgStar } from "../assets";

const DetailsTvShowPages = () => {
	const { id } = useParams();
	const [tvShow, setTvShow] = useState(null);

	useEffect(() => {
		const getTvShowDetail = async () => {
			const tvShowData = await fetchTvShowDetail(id);
			setTvShow(tvShowData);
		};

		getTvShowDetail();
	}, [id]);

	if (!tvShow) return <div>Loading...</div>;

	return (
		<div className="max-w-screen-xl mx-auto">
			<Navbar />

			{/* Home */}
			<div className="relative mt-10">
				<img
					className="w-full h-[480px] object-cover object-top rounded-3xl "
					src={IMG_URL + tvShow.backdrop_path}
					alt=""
				/>
				<div className="absolute w-fit rounded-2xl  -bottom-12 left-10 p-10 bg-black/20 backdrop-blur-lg">
					<div className="flex gap-3 text-sm items-center font-light text-blue-200">
						<p>Home</p>
						<p>/</p>
						<p>Tv Show</p>
					</div>
					<h1 className="text-4xl font-semibold">
						{tvShow.title || tvShow.name}
					</h1>
				</div>
			</div>

			{/* Details */}
			<div className="grid grid-cols-2 gap-20 mt-20 p-20 ">
				<img
					className="w-full  rounded-2xl shadow-2xl"
					src={IMG_URL + tvShow.poster_path}
					alt=""
				/>
				<div className="space-y-5">
					<h1 className="text-xl font-semibold">{tvShow.tagline}</h1>
					<p className="text-gray-400 font-light leading-relaxed">
						{tvShow.overview}
					</p>

					<span className="rounded-lg top-1 left-1 flex items-center gap-2 p-2 text-yellow-500 bg-black/50 backdrop-blur-lg w-fit">
						<img src={ImgStar} alt="" />
						<p>{tvShow.vote_average}</p>
					</span>

					<div className="grid grid-cols-2 gap-6">
						<div className="space-y-3">
							<p className="text-gray-400">Type</p>
							<h1 className="text-xl text-gray-300">Tv Show</h1>
						</div>
						<div className="space-y-3">
							<p className="text-gray-400">Status</p>
							<h1 className="text-xl text-gray-300">{tvShow.status}</h1>
						</div>
						<div className="space-y-3">
							<p className="text-gray-400">First air date</p>
							<h1 className="text-xl text-gray-300">{tvShow.first_air_date}</h1>
						</div>
						<div className="space-y-3">
							<p className="text-gray-400">Last air date</p>
							<h1 className="text-xl text-gray-300">{tvShow.last_air_date}</h1>
						</div>
						<div className="space-y-3">
							<p className="text-gray-400">No. of Seasons</p>
							<h1 className="text-xl text-gray-300">
								{tvShow.number_of_seasons}
							</h1>
						</div>
						<div className="space-y-3">
							<p className="text-gray-400">No. of episodes</p>
							<h1 className="text-xl text-gray-300">
								{tvShow.number_of_episodes}
							</h1>
						</div>
					</div>

					<div className="space-y-3">
						<p className="text-gray-400">Genres</p>
						<h1 className="text-xl text-gray-300">
							{tvShow.genres.map((genre) => genre.name).join(", ")}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsTvShowPages;
