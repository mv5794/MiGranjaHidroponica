import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Login from "@/views/login/Login.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name:'Profile',
    component: () => import ('@/views/profile/Profile.vue')
  },
  {
    path: '/historic/',
    name:'Historic',
    component: () => import ('@/views/historic/Historic.vue'),
    children: [
      {
        path: 'temperature',
        component:() => import('@/views/historic/components/temperatureChart.vue')
      },
      {
        path: 'ph',
        component:() => import('@/views/historic/components/PH.vue')
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
