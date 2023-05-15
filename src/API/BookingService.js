import axios from "axios";

const API_URL = 'https://localhost:44372/PharmacyMatching';

export default class BookingService {    
    static async changeStatus(bookingId) {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://localhost:44372/PharmacyMatching/orders?bookingId='+bookingId
        };
        await axios.request(config);
    }
}