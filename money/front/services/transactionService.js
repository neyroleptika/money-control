import axios from 'axios';
import authService from './authService';

const API_URL = 'http://localhost:5000/api/transactions';

const addTransaction = async (type, amount, category) => {
    const token = authService.getCurrentUser();
    const response = await axios.post(API_URL, { type, amount, category }, {
        headers: { 'x-auth-token': token }
    });
    return response.data;
};

const getTransactions = async () => {
    const token = authService.getCurrentUser();
    const response = await axios.get(API_URL, {
        headers: { 'x-auth-token': token }
    });
    return response.data;
};

export default { addTransaction, getTransactions };