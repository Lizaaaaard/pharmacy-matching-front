import axios from "axios";

const API_URL = 'https://localhost:44372/PharmacyMatching';

export default class PharmsService {
    static async getAll() {
        const response = await axios.get(API_URL + '/pharmacies');
        return response.data;
    }
}