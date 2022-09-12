import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/views/HomePage.vue'
import RestaurantProfile from '@/views/RestaurantPartner/RestaurantProfile.vue'
import forClient from '@/views/forClient.vue'
import NewUser from '@/views/NewUser.vue'
import UserLoginPage from '@/views/UserLoginPage.vue'
import UserProfile from '@/views/UserProfile.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import forPartner from '@/views/RestaurantPartner/forPartner.vue'
import NewPartner from '@/views/RestaurantPartner/NewPartner.vue'
import PartnerLogin from '@/views/RestaurantPartner/PartnerLogin.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/partner/profile',
    component: RestaurantProfile
  },
  {
    path: '/partner/',
    component: forPartner
  },
  {
    path: '/partner/new',
    component: NewPartner
  },
  {
    path: '/partner/login',
    component: PartnerLogin
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
  },
  
  // the page not found option
  { 
    path: "*",
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
