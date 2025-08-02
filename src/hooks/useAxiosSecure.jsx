// src/hooks/useAxiosSecure.js
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';


// ✅ 1. Create axios instance and name it 'axiosSecure'
const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-five-gold.vercel.app',
});

const useAxiosSecure = () => {
    // ✅ 3. Use AuthContext via useContext
    const { logOut } = useAuth();

    // ✅ 2. Use useNavigate from React Router
    const navigate = useNavigate();

    useEffect(() => {
        // Set up interceptors only once
        const requestInterceptor = axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('access-token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                const status = error?.response?.status;
                if (status === 401 || status === 403) {
                    try {
                        await logOut(); // logout from context
                        navigate('/login'); // redirect to login page
                    } catch (logoutError) {
                        console.error('Logout failed:', logoutError);
                    }
                }
                return Promise.reject(error);
            }
        );

        // Cleanup on unmount
        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [logOut, navigate]);

    // ✅ Return instance outside useEffect so it’s callable in components
    return [axiosSecure];
};

export default useAxiosSecure;
