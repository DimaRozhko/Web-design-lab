import Vue from 'vue'
import VueRouter from 'vue-router'

import UserProfile from '@/components/UserProfile.vue'
import ProgrammingCalc from '@/components/ProgrammingCalc'
import OrdinaryCalc from '@/components/OrdinaryCalc.vue'
import About from '@/components/About.vue'
import LogIn from '@/components/LogIn.vue'
import SignUp from '@/components/SignUp.vue'
// import Sidebar from '@/components/Sidebar.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: UserProfile,
    meta: { auth : false } },
  { path: '/about', component: About,
    meta: { auth : false } },
  { path: '/log-in', component: LogIn, 
    meta: {sidebar: false, auth : false } },
  { path: '/sign-up', component: SignUp, 
    meta: {sidebar: false, auth : false } },
  { path: '/programming-calc', component: ProgrammingCalc,
    meta: { auth : false } },
  { path: '/ordinary-calc', component: OrdinaryCalc,
    meta: { auth : false } }
]

export default new VueRouter({
  mode: 'history',
  routes: routes
})