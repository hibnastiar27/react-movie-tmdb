import React from "react";
import { baseImg } from "../services/config";
function Card(props) {
	const { datas, genres } = props;
	return (
		<>
			{datas.map((data) => {
				return (
					<div className=" p-5 my-3 rounded-lg shadow-lg shadow-blue-200 border h-fit">
						<img
							className="rounded-lg"
							src={`${baseImg}${data.poster_path}`}
							alt=""
						/>
						<div className="title p-3">
							<h1 className="text-3xl font-bold">{data.title}</h1>
							<div className="flex gap-2 flex-wrap my-3">
								{genres.map((genre) => {
									if (data.genre_ids.includes(genre.id)) {
										return (
											<p
												className="py-2 px-5 text-sm bg-blue-500 text-white rounded-full"
												key={genre.id}>
												{genre.name}
											</p>
										);
									}
								})}
							</div>
							<p className="text-sm px-3 py-2 bg-orange-500 w-fit rounded-lg text-white ">
								{data.vote_average.toFixed(2)}
							</p>
						</div>
						<button
							type="button"
							onClick={() => {
								window.location.href = `/details/${data.id}`;
							}}
							className="w-full text-center rounded-lg font-medium p-3 bg-blue-500 text-white">
							Details
						</button>
					</div>
				);
			})}
		</>
	);
}

export default Card;
