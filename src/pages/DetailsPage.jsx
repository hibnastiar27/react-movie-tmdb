import React from "react";
import { getDetails, getVideo, getCredits } from "../services/product.service";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CardDetails from "../components/CardDetails";
function DetailsPage(props) {
	const { id } = props;
	const [details, setDetails] = useState([]);
	const [credits, setCredits] = useState([]);
	const [video, setVideo] = useState([]);

	useEffect(() => {
		getDetails(id, (data) => {
			setDetails(data);
		});
	}, []);

	useEffect(() => {
		getCredits(id, (data) => {
			setCredits(data);
		});
	}, []);

	useEffect(() => {
		getVideo(id, (data) => {
			setVideo(data);
		});
	}, []);

	return (
		<>
			<Navbar />
			<CardDetails details={details} credits={credits} video={video} />
		</>
	);
}

export default DetailsPage;
