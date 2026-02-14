import { createRouter, createWebHistory } from 'vue-router';

import AuthSignUp from '@/components/Auth/AuthSignUp.vue';
import AuthRegister from '@/components/Auth/AuthRegister.vue';
import AuthForgotPassword from '@/components/Auth/AuthForgotPassword.vue';
import AuthResetPassword from '@/components/Auth/AuthResetPassword.vue';
import Photo from '@/components/photo/Photo.vue';
import UserProfile from '@/components/user/UserProfile.vue';
import NotFound from '@/views/NotFound.vue';
import UserMyPosts from '@/components/user/UserMyPosts.vue';
import UserPhotoPost from '@/components/user/UserPhotoPost.vue';

/* lazy loading route */

function lazyRouteView(route) {
    return () => import(`@/views/${route}View.vue`);
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/auth',
            name: 'auth',
            component: lazyRouteView('Auth'),
            children: [
                {
                    path: '/auth',
                    name: 'AuthSignUp',
                    component: AuthSignUp,
                },
                {
                    path: '/auth/create',
                    name: 'AuthRegister',
                    component: AuthRegister,
                },
                {
                    path: '/auth/forgot',
                    name: 'AuthForgotPassword',
                    component: AuthForgotPassword,
                },
                {
                    path: '/auth/reset',
                    name: 'AuthReset',
                    component: AuthResetPassword,
                },
            ],
        },
        {
            path: '/photo',
            name: 'photo',
            component: Photo,
        },
        {
            path: '/profile/:name',
            name: 'profile',
            component: UserProfile,
        },

        {
            path: '/account',

            component: lazyRouteView('Account'),
            meta: { requiresAuth: true },

            children: [
                {
                    path: '/account/feed',
                    name: 'account',
                    component: UserMyPosts,
                    meta: {
                        login: true,
                    },
                },
                {
                    path: '/account/stats',
                    name: 'stats',
                    component: () => import('../components/user/UserStats.vue'),
                },
                {
                    path: '/account/post-create',
                    name: 'post-create',
                    component: UserPhotoPost,
                },
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        },
    ],
});

/* user store */
import { useUserStore } from '@/stores/useUserStore';

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    const needsAuth = to.matched.some((record) => record.meta.requiresAuth);
    const isAuthenticated = userStore.isAuth;
    if (needsAuth && !isAuthenticated) {
        next({ name: 'AuthSignUp' });
    } else if (to.path.startsWith('/auth') && isAuthenticated) {
        next({ name: 'account' });
    } else {
        next();
    }
});

export default router;
