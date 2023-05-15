import axios from "axios";

const API_URL = 'https://localhost:44372/PharmacyMatching';

export default class PharmsService {
    static async getAll() {
        const response = await axios.get(API_URL + '/pharmacies');
        return response.data;
    }

    static async addPharmacy(pharmacy) {
        console.log(pharmacy)
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: API_URL + '/pharmacies',
            headers: {
                'Content-Type': 'application/json'
            },
            data: pharmacy
        };
        const response = await axios.request(config);
        return response;
    }
}