import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { baseImg } from "../services/config";
function CardDetails(props) {
	const { details, credits, video } = props;

	return (
		<>
			<div className="max-w-7xl m-auto">
				<div className="mt-5">
					<Breadcrumbs
						className="p-5 bg-gradient-to-r from-slate-200 to-white rounded-lg "
						separator=" - ">
						<a href="/" className="opacity-60 mx-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
							</svg>
						</a>
						<a href="#" className="font-medium mx-1">
							{details.title}
						</a>
					</Breadcrumbs>
				</div>
				<div className="mt-5 flex gap-5">
					{/* Img */}
					<img
						className="w-1/3 rounded-xl"
						src={`${baseImg}${details.poster_path}`}
						alt=""
					/>
					<div className="flex flex-col gap-2 p-5 bg-gradient-to-r from-slate-200 to-white border border-slate-200 shadow-lg shadow-slate-200 w-full rounded-xl">
						<h1 className="text-3xl font-bold">{details.title}</h1>
						<p>{details.overview}</p>
						<p className="py-2 px-3 text-lg font-medium bg-yellow-300 rounded-lg w-fit">
							{details.vote_average}
						</p>
						<p className="text-xl font-medium">Genres</p>
						<div className="flex gap-3">
							{details.genres?.map((genre) => {
								return (
									<p className="py-2 px-3 bg-blue-500 text-white rounded-lg">
										{genre.name}
									</p>
								);
							})}
						</div>
						<div className="flex flex-wrap gap-5">
							{credits?.slice(0, 5).map((credit) => {
								return (
									<div className="flex flex-col gap-2 justify-center items-center  rounded-xl">
										<img
											className="rounded-xl w-[100px]"
											src={`${baseImg}${credit.profile_path}`}
											alt=""
										/>
										<p>{credit.name}</p>
									</div>
								);
							})}
						</div>
						{video?.slice(0, 1).map((v) => {
							return (
								<a
									className="w-full text-center rounded-lg font-medium p-3 bg-blue-500 text-white"
									target="_blank"
									href={`https://www.youtube.com/watch?v=${v.key}`}>
									See Trailers
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default CardDetails;
