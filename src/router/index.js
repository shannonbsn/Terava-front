import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import OnBoardingView from '@/views/OnBoardingView.vue'
import TripView from '@/views/TripView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
    {
      path: '/board',
      name: 'board',
      component: OnBoardingView,
    },
    {
      path: '/trip',
      name: 'trip',
      component: TripView,
    },
  ],
})

export default router
