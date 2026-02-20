import { defineStore } from 'pinia';
import api from '../services/api';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('auth_token') || null,
        isAuthenticated: !!localStorage.getItem('auth_token'),
        error: null,
        isLoading: false,
    }),
    actions: {
        async register(userData) {
            this.isLoading = true;
            this.error = null;
            try {
                const response = await api.post('/register', userData);
                this.token = response.data.access_token;
                this.user = response.data.user;
                this.isAuthenticated = true;
                localStorage.setItem('auth_token', this.token);
                return true;
            } catch (err) {
                this.error = err.response?.data?.message || 'Une erreur est survenue lors de l\'inscription.';
                return false;
            } finally {
                this.isLoading = false;
            }
        },
        async login(credentials) {
            this.isLoading = true;
            this.error = null;
            try {
                const response = await api.post('/login', credentials);
                this.token = response.data.access_token;
                this.user = response.data.user;
                this.isAuthenticated = true;
                localStorage.setItem('auth_token', this.token);
                return true;
            } catch (err) {
                this.error = err.response?.data?.message || 'Identifiants incorrects.';
                return false;
            } finally {
                this.isLoading = false;
            }
        },
        async fetchUser() {
            if (!this.token) return;
            try {
                const response = await api.get('/user');
                this.user = response.data;
                this.isAuthenticated = true;
            } catch (err) {
                this.logout();
            }
        },
        logout() {
            this.user = null;
            this.token = null;
            this.isAuthenticated = false;
            localStorage.clear();
        }
    }
});
