const API_KEY = "7221b0e10a8ac6bcbee4eae9c5ed2f03";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&langauge=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaties: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
