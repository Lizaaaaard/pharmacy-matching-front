import axios from "axios";

const API_URL = 'https://localhost:44372/PharmacyMatching';

export default class AdminService {
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
    /*
    let data = JSON.stringify({
        "id": 0,
        "name": "St. Maria pharm",
        "description": "8:00-21:00, Sunday is a day off",
        "address": "415, Lenin's street",
        "phoneNumber": "+375258709825"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://localhost:44372/PharmacyMatching/pharmacies',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': '.AspNetCore.Identity.Application=CfDJ8K50S7Cu6iZMiHPmWLjpZ6ChrVhbAzdOOHEeWfxFolRzhAi9evdJvSfdZMYgBB1vedv3Mt7z0qTh40Iu7yaNV2KyH-Fw2HLEeUuVO5idGCaMKMryCk5J5pTUly5KybPkYHz8cQ6QCVr0ioXADzP5-EOOCcJQL0QTAM921EFnH5wHHL8ztd1vf3-YwZrZRI0ylrcBYr9Tgh63xxnfJgLwqpsbz9PrfbEYZ7wKNrUf8T5mHaf2Negi4oe6L5feQTmNpYQUtQipa-4tGT5TXriOnO8a9LUodwKSUj_33rRI0zbxmHDgdjcnJd2kA5SXWzdMQf76y4fgyXrF5DedjX_DsgxU5IuCgIdtqhsITLBv-SPucffjzGpCb-fAuHZgebuGZBI3yFed-t0Y6XnLrEJiwgddCtMrGk5rRkhszj0NalRZhx-dE69n3BvlODOxBKYCENIANizOw4ATCmPqogxNcZdWzcDoJXmW_lXU1Y5t7tGeYtjgnfRRCnFW72WjmFp5Jfh-92aRoqFOna1sSVUfi94O5fqyBsp3yy_7xe6efWkzWm4gw4Ic8lEqLyhsmaDBMtqisiY8e2nUwsvaZgJAjj3nhcp3rEWIJfLrvfALPeTog4HSZGAqKFM8CJZuYtjOmXBweD0-TW_5B364yWZjuWOcGaDio-p8EpTu2m48VN8LDvLm6SJvmbmQiLYLDRXp6GCF7IFoXMU58EcK8LdHUEii7vxmTrRETF_dWetvw3ZeVIof9Hx03tzHvZH94wy1dvh49Sg6sW0fXukJBawnoEs'
        },
        data : data
    };

    async function makeRequest() {
        try {
            const response = await axios.request(config);
            console.log(JSON.stringify(response.data));
  */


}