import axios from "axios";

const API_URL = 'https://localhost:44372/PharmacyMatching';

export default class MedcService {
    static async getAll() {
        const response = await axios.get(API_URL + '/medicines');
        return response.data;
    }
    
}