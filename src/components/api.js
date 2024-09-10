// api.js
import axios from "axios";
const API_URL_STUDENTS='http://127.0.0.1:8000/api/students/'

export const fetchStudents = async () => {
    try {
        const token = localStorage.getItem('access_token'); 
        const response = await axios.get(API_URL_STUDENTS, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching students:", error);
        return [];
    }
};