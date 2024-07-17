import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
	const { active } = props;
	return (
		<nav className="flex justify-between py-4 text-gray-200 items-center">
			<h1 className="text-3xl font-bold">
				<Link to="/">NONTONS</Link>
			</h1>
			<div className="flex gap-4 *:p-2">
				<div
					className={`flex flex-col gap-2  ${
						active === "Home" && "text-sky-500 font-bold"
					}`}>
					<Link to="/">Home</Link>
					<div
						className={` ${
							active === "Home" ? "w-full h-0.5 bg-sky-500" : "hidden"
						}`}></div>
				</div>
				<div
					className={`flex flex-col gap-2  ${
						active === "Movies" && "text-sky-500 font-bold"
					}`}>
					<Link to="/movies">Movies</Link>
					<div
						className={` ${
							active === "Movies" ? "w-full h-0.5 bg-sky-500" : "hidden"
						}`}></div>
				</div>
				<div
					className={`flex flex-col gap-2  ${
						active === "TvShows" && "text-sky-500 font-bold"
					}`}>
					<Link to="/tvshows">TV Shows</Link>
					<div
						className={` ${
							active === "TvShows" ? "w-full h-0.5 bg-sky-500" : "hidden"
						}`}></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
