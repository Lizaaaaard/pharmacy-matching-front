import axios from "axios";

const API_URL = 'https://localhost:44372/PharmacyMatching';

export default class CartService {
    static async booking(order) {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: API_URL + '/takeOrder',
            headers: {
                'Content-Type': 'application/json'
            },
            data: order
        };
        return await axios.request(config);
    }

    static async getPharmMedc(cart) {
        let data = JSON.stringify(
            cart.map(function (c) {
                return {
                    medcId: c.medc.id,
                    doseId: c.dose.id
                }
            }
        ));

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://localhost:44372/PharmacyMatching/availablePharmacies',
            headers: {
                'Content-Type': 'application/json',
            },
            data : data
        };
        const response = await axios.request(config);
        return response.data;
    }
    
}