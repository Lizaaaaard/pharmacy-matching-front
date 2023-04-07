import axios from "axios";

const API_URL = 'https://localhost:44372/PharmacyMatching';

export default class MedcService {
    static async getAll() {
        const config = {
            method: 'get',
            url: API_URL + '/medicines'
        }
        return axios(config);
    }
}