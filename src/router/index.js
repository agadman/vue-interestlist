import { createRouter, createWebHistory } from 'vue-router';
import startView from '@/views/startView.vue';
import interestListView from '@/views/interestListView.vue';
import informationView from '@/views/informationView.vue';

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'start',
        component: startView,
        meta: { hero: true }
    },
    {
        path: '/tv-serier',
        name: 'tv-serier',
        component: interestListView,
        meta: { hero: false }
    },
    {
        path: '/information',
        name: 'information',
        component: informationView,
        meta: { hero: false }
    }],
})

export default router;