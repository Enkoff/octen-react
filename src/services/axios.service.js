import axios from 'axios';
import {configThemoviedb} from '../config';

export const axiosService = axios.create({baseURL: configThemoviedb.baseURL});