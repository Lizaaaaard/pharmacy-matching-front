import axios from "axios";

const API_URL = 'https://localhost:44372/PharmacyMatching';

export default class AuthService {
    static async getAll(limit = 10, page = 1) {
        const config = {
            method: 'post',
            url: API_URL + '/medicinesByPage',
            params: {
                page: page,
                limit: limit
            }
        }
        return axios(config);
    }
}