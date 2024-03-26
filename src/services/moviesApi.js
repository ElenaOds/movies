import axios from "axios";

const KEY = '56fe42c945e3ca855df6abfdcd1328f7';

const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
  });

  export const getTrendingData = async () => {
    const { data } = await moviesApi.get(`trending/all/day`, {
      params: {
        api_key: KEY,
      },
    });
    return data;
  };

  export const getTrendingMovies = async () => {
    const { data } = await moviesApi.get(`trending/movie/day`, {
      params: {
        api_key: KEY,
      },
    });
    return data;
  };

  export const getTrendingShows = async () => {
    const { data } = await moviesApi.get(`trending/tv/day`, {
      params: {
        api_key: KEY,
      },
    });
    return data;
  };

  export const getTrendingPerson = async () => {
    const { data } = await moviesApi.get(`trending/person/day`, {
      params: {
        api_key: KEY,
      },
    });
    return data;
  };

  export const getMovieGenre = async () => {
    const { data } = await moviesApi.get(`/genre/movie/list`, {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });
    return data;
  };


  export const searchQuery = async query => {
    const { data } = await moviesApi.get(`/search/multi`, {
      params: {
        api_key: KEY,
        language: 'en-US',
        page: 1,
        include_adult: false,
        query,
      },
    });
    return data;
  };
  