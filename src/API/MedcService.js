﻿import axios from "axios";

const API_URL = 'https://localhost:44372/PharmacyMatching';

export default class MedcService {
    static async getAll(limit = 10, page = 1) {
        const config = {
            method: 'get',
            url: API_URL + '/medicinesByPage',
            params: {
                page: page,
                limit: limit
            }
        }
        return axios(config);
    }

    static async getTotalCount() {
        const config = {
            method: 'get',
            url: API_URL + '/medicines/count'
        }
        return axios(config);
    }
}