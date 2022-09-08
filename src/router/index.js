import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/views/HomePage.vue'
import RestaurantInfo from '@/views/RestaurantInfo.vue'
import forClient from '@/views/forClient.vue'
import NewUser from '@/views/NewUser.vue'
import UserLoginPage from '@/views/UserLoginPage.vue'
import UserProfile from '@/views/UserProfile.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/partner/info',
    component: RestaurantInfo
  },
  {
    path: '/client/',
    component: forClient
  },
  {
    path: '/client/new',
    component: NewUser
  },
  {
    path: '/client/login',
    component: UserLoginPage
  },
  {
    path: '/client/profile',
    component: UserProfile
  }
]

const router = new VueRouter({
  routes
})

export default router
