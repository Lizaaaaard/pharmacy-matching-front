import axios from "axios";

const API_URL = 'https://localhost:44372/PharmacyMatching';
export default class RolesService{
    static async getAllTitles() {
        const response = await axios.get(API_URL + '/roles');
        return response.data;
    }
    
    static async getAllUserRoles() {
        const response = await axios.get(API_URL + '/manage/roles');
        return response.data;
    }

};