import axios from "axios";

const API_URL = 'https://localhost:44372/PharmacyMatching';

export default class AuthService {
    static async login(loginDto) {
        
        return axios.post(API_URL + '/login', loginDto);
    }
    
    static async register(registerDto){
        return axios.post(API_URL + '/register', registerDto);
    }
}