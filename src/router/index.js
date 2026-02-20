import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Landing.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/admin',
        name: 'AdminDashboard',
        component: () => import('../views/AdminDashboard.vue'),
        meta: { requiresAuth: true, role: 'admin' }
    },
    {
        path: '/connected',
        name: 'Connected',
        component: () => import('../views/Connected.vue'),
        meta: { requiresAuth: true }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();

    // Auto-fetch user if token is present but user data is missing (e.g., page reload)
    if (authStore.token && !authStore.user) {
        await authStore.fetchUser();
    }

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        return next('/login');
    }

    // Simple role check
    if (to.meta.role && authStore.user?.role !== to.meta.role) {
        if (authStore.user?.role === 'member') {
            return next('/connected');
        } else {
            return next('/'); // Fallback
        }
    }

    // Redirect authenticated users away from login/register
    if ((to.path === '/login' || to.path === '/register') && authStore.isAuthenticated) {
        return authStore.user?.role === 'admin' ? next('/admin') : next('/connected');
    }

    next();
});

export default router
