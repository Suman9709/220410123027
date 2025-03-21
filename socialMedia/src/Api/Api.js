import axios from "axios";

const API_BASE_URL = "http://20.244.56.144/test";
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNTM4MjY0LCJpYXQiOjE3NDI1Mzc5NjQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImExNTcxMGViLTU0NTYtNGM1MS04YWE3LTVhODU5ZTgwYjdlNiIsInN1YiI6InN1bWFuLms5NzA5QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6Ik15Q29tcGFueSIsImNsaWVudElEIjoiYTE1NzEwZWItNTQ1Ni00YzUxLThhYTctNWE4NTllODBiN2U2IiwiY2xpZW50U2VjcmV0IjoiQlJFc0N6SUVwSURJcFpKcyIsIm93bmVyTmFtZSI6IlN1bWFuIiwib3duZXJFbWFpbCI6InN1bWFuLms5NzA5QGdtYWlsLmNvbSIsInJvbGxObyI6IjIyMDQxMDEyMzAyNyJ9.A7jDt81ZnD54BrIDe13Bmx5Lmyunh5cPLJCjU3gonQg";

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`, {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`,
                "Content-Type": "application/json",
            },
        });

        console.log("API Response:", response.data);

        if (!response.data || !response.data.users) {
            return [];
        }

        return Object.entries(response.data.users).map(([id, name]) => ({
            id: parseInt(id),
            name: name,
            postCount: Math.floor(Math.random() * 100),
        }));

    } catch (error) {
        console.error("Error fetching users:", error.response ? error.response.data : error.message);
        return []; 
    }
};
