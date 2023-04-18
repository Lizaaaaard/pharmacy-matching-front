import axios from "axios";

const API_URL = 'https://localhost:44372/PharmacyMatching';

export default class PharmsService {
    static async getAll(limit = 10, page = 1) {
        const config = {
            method: 'get',
            url: API_URL + '/pharmacies'/*,
            config: params{
                _limit: limit,
                _page: page
            }*/
        }
        return axios(config);
    }
}