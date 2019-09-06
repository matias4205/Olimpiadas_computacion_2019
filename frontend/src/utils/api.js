import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const signIn = (email, password) => axios({
    url: `${API_URL}/api/auth/sign-in`,
    method: 'post',
    auth: {
        password,
        username: email
    }
})

export const signUp = (data) => axios({
    url: `${API_URL}/api/auth/sign-up`,
    method: 'post',
    data: {
        "user": {
            "firstName": data.personal.firstName,
            "lastName": data.personal.lastName,
            "role": "administrator",
            "email": data.personal.email,
            "password": data.personal.password
        },
        "productor": {
            "comercialDenomination": data.company.comercialDenomination,
            "ownerCompany": data.company.ownerCompany,
            "fiscalCode": data.company.fiscalCode,
            "address": data.company.address
        }
    }
});

export const getReadings = () => axios({
    url: `${API_URL}/api/readings`  
});

export const getLastReadings = () => axios({
    url: `${API_URL}/api/readings/last`  
});