import axios from "axios";

const KEY = '56fe42c945e3ca855df6abfdcd1328f7';

const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
  });

  