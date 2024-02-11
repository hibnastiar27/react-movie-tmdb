import React from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<>
			<header className="bg-blue-500">
				<div className="max-w-7xl px-4 py-4 sm:px-0 m-auto flex justify-between items-center h-[72px]">
					<Link to="/">
						<h1 className="text-3xl font-bold text-white">MOVIES</h1>
					</Link>
					<div
						id="menu"
						className="hidden sm:text-white sm:static sm:flex sm:w-fit sm:bg-transparent sm:border-none sm:shadow-none gap-4 bg-white shadow-lg border p-5 rounded-lg absolute top-28 right-5 w-52 text-center ">
						<Link to="/" className="p-3 block sm:p-0">
							Home
						</Link>
						<Link to="/ongoing" className="p-3 block sm:p-0">
							Now Playing
						</Link>
						<Link to="/trending" className="p-3 block sm:p-0">
							Trending
						</Link>
						<Link to="/genre" className="p-3 block sm:p-0">
							Genre
						</Link>
					</div>
					<button className="sm:hidden">
						<Hamburger
							color="#fff"
							onToggle={(toggled) => {
								// true dibuka, false ditutup
								const menu = document.getElementById("menu");
								if (toggled) {
									menu.classList.remove("hidden");
								} else {
									menu.classList.add("hidden");
								}
							}}
						/>
					</button>
				</div>
			</header>
		</>
	);
}

export default Navbar;
