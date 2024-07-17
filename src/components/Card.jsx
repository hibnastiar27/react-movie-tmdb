import React from "react";
import { ImgStar } from "../assets";
import { IMG_URL } from "../api";
import { motion } from "framer-motion";

const Card = (props) => {
	const { imgThumb, title, rating, kunci } = props;
	return (
		<motion.div className="p-3 bg-slate-700/50 border border-gray-700 backdrop-blur-lg rounded-xl">
			<div className="relative">
				<span className="absolute rounded-lg top-1 left-1 flex items-center gap-2 p-2 text-yellow-500 bg-black/50 backdrop-blur-lg w-fit">
					<img src={ImgStar} alt="" />
					<p>{rating}</p>
				</span>
				<img className="w-full rounded-lg" src={IMG_URL + imgThumb} alt="" />
			</div>
			<h1 className="text-white font-semibold px-4 pt-4">{title}</h1>
		</motion.div>
	);
};

export default Card;
