import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const register = async (email, password) => {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    localStorage.setItem('token', response.data.token);
};

const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem('token', response.data.token);
};

const logout = () => {
    localStorage.removeItem('token');
};

const getCurrentUser = () => {
    return localStorage.getItem('token');
};

export default { register, login, logout, getCurrentUser };