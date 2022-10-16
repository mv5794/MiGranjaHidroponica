import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Login from "@/views/login/Login.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/stats'
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
    meta:{
      visible: true,
      icon: 'person-outline'
    },
    component: () => import ('@/views/profile/Profile.vue')
  },
  {
    path: '/stats',
    name:'Stats',
    meta:{
      visible: true,
      icon: 'person-outline'
    },
    component: () => import ('@/views/currentStats/Stats.vue')
  },
  {
    path: '/historic/',
    name:'Historic',
    component: () => import ('@/views/historic/Historic.vue'),
    children: [
      {
        path: 'humidity',
        name:'Humedad Historico',
        meta:{
          visible: true,
          icon: 'person-outline'
        },
        component:() => import('@/views/historic/components/humidityChart.vue')
      },
      {
        path: 'temperatures',
        name:'Temperatura Historico',
        meta:{
          visible: true,
          icon: 'person-outline'
        },
        component:() => import('@/views/historic/components/temperatures.vue')
      },
      {
        path: 'ph',
        name:'PH Historico',
        meta:{
          visible: true,
          icon: 'person-outline'
        },
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
