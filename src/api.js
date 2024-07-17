import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "2cf9813d8adb04a7e36b1dd36c34fd90";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// Trending
const fetchAll = async () => {
	const response = await axios.get(
		`${BASE_URL}/trending/all/day?api_key=${API_KEY}`
	);
	return response.data.results;
};

const fetchAllDetail = async (mediaType, id) => {
	const response = await axios.get(
		`${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}`
	);
	return response.data;
};

// Movies
const fetchMovies = async () => {
	const response = await axios.get(
		`${BASE_URL}/movie/popular?api_key=${API_KEY}`
	);
	return response.data.results;
};

const fetchMoviesAll = async () => {
	const response = await axios.get(
		`${BASE_URL}/movie/popular?api_key=${API_KEY}`
	);
	return response.data;
};

const fetchMovieDetail = async (id) => {
	const response = await axios.get(
		`${BASE_URL}/movie/${id}?api_key=${API_KEY}`
	);
	return response.data;
};

// Tv Shows
const fetchTvShows = async () => {
	const response = await axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
	return response.data.results;
};

const fetchTvShowsAll = async () => {
	const response = await axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
	return response.data;
};

const fetchTvShowDetail = async (id) => {
	const response = await axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
	return response.data;
};

const search = async (query) => {
	const response = await axios.get(
		`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`
	);
	return response.data.results;
};

const searchMovie = async (query) => {
	const response = await axios.get(
		`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
	);
	return response.data.results;
};

const searchTv = async (query) => {
	const response = await axios.get(
		`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`
	);
	return response.data.results;
};

export {
	fetchAll,
	fetchMovies,
	fetchTvShows,
	IMG_URL,
	fetchMoviesAll,
	fetchTvShowsAll,
	fetchMovieDetail,
	fetchTvShowDetail,
	fetchAllDetail,
	search,
	searchMovie,
	searchTv,
};
