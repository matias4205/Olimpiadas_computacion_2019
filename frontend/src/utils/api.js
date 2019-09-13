import axios from 'axios';

const API_URL = window.location.origin;

/* Auth */

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

/* Readings */

export const getReadings = () => axios({
    url: `${API_URL}/api/readings`,
    method: 'get'
});

export const getLastReadings = () => axios({
    url: `${API_URL}/api/readings/last`,
    method: 'get'
});

/* User */

export const getMe = () => axios({
    url: `${API_URL}/api/users/me`,
    method: 'get'
});

export const getUsers = () => axios({
    url: `${API_URL}/api/users`,
    method: 'get'
});

export const updateUser = ({ firstName, lastName, email, profilePhoto, _id }) => axios({
    url: `${API_URL}/api/users/${_id}`,
    method: 'put',
    data: {
        firstName,
        lastName,
        email,
        profilePhoto
    }
});

/* Productor */

export const getProductor = () => axios({
    url: `${API_URL}/api/productor`,
    method: 'get'
});