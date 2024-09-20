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

const API_URL = "http://127.0.0.1:8000/api/";

export const fetchProducts = async () => {
  try {
    const token = localStorage.getItem("access_token");
    const response = await axios.get(API_URL + "Products/", {
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

export const createProduct = (product) =>
  fetch(API_URL + "Products/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  }).then((response) => response.json());

export const updateProduct = (id, updates) =>
  fetch(`${API_URL + "Products/"}${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  }).then((response) => response.json());

export const deleteProduct = (id) =>
  fetch(`${API_URL +'Products/'}${id}/`, {
    method: "DELETE",
  });