import axios from 'axios';

import { bd_url } from './bd.js'







export const create_axios__api = axios.create(
    {
        baseURL: bd_url + "/api/"
    }
)







