import axios from 'axios';
import {carsBaseURL, jsonPlaceholderBaseUrl} from '../constants';

const axiosCarService = axios.create({baseURL: carsBaseURL});
const axiosJsonPlaceholderService = axios.create({baseURL: jsonPlaceholderBaseUrl});

export {axiosCarService, axiosJsonPlaceholderService};