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
    },
    {
        path: '/intresse',
        name: 'intresse',
        component: interestListView,
    },
    {
        path: '/information',
        name: 'information',
        component: informationView,
    }],
})

export default router;