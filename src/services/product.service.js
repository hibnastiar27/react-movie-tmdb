import Axios from "axios";
import { baseUrl, apiKey } from "./config";

export const getNowPlaying = (callback) => {
	Axios.get(`${baseUrl}movie/now_playing${apiKey}`)
		.then((res) => {
			return res.data;
		})
		.then((res) => {
			callback(res.results);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getGenre = (callback) => {
	Axios.get(`${baseUrl}genre/movie/list${apiKey}`)
		.then((res) => {
			return res.data;
		})
		.then((res) => {
			callback(res.genres);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getDetails = (id, callback) => {
	Axios.get(`${baseUrl}movie/${id}${apiKey}`)
		.then((res) => {
			return res.data;
		})
		.then((res) => {
			callback(res);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getCredits = (id, callback) => {
	Axios.get(`${baseUrl}movie/${id}/credits${apiKey}`)
		.then((res) => {
			return res.data;
		})
		.then((res) => {
			callback(res.cast);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getVideo = (id, callback) => {
	Axios.get(`${baseUrl}movie/${id}/videos${apiKey}`)
		.then((res) => {
			return res.data;
		})
		.then((res) => {
			callback(res.results);
		})
		.catch((err) => {
			console.log(err);
		});
};
