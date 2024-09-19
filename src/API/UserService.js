import axios from "axios";

const API_URL = 'https://localhost:44372/PharmacyMatching';

export default class UserService {
    static async getUser(login) {
        const response = await axios.get(API_URL + '/user', {
            params: {
                login: login
            }
        });
        return response.data;
    }

    static async updateUser(update) {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://localhost:44372/PharmacyMatching/editUserInfo',
            headers: {
                'Content-Type': 'application/json'
            },
            data : update
        };
        const response = await axios.request(config);
        return response;            
    }

    static async getHistory(userId) {
        const response = await axios.get(API_URL + '/user/history', {
            params: {
                userId: userId
            }
        });
        return response.data;
    }

    static async getUsersHistory() {
        const response = await axios.get(API_URL + '/users/orders');
        return response.data;
    }

    static async getUsersHistoryByPharmacy(managerId) {
        const response = await axios.get(API_URL + '/users/orders/pharmacy', {
            params: {
                managerId: managerId
            }
        });
        return response.data;
    }

    static async getAllUsers() {
        const response = await axios.get(API_URL + '/users');
        return response.data;
    }
}