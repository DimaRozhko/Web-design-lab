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
  { path: '/', component: UserProfile },
  { path: '/about', component: About },
  { path: '/log-in', component: LogIn, meta: {sidebar: false} },
  { path: '/sign-up', component: SignUp, meta: {sidebar: false} },
  { path: '/programming-calc', component: ProgrammingCalc },
  { path: '/ordinary-calc', component: OrdinaryCalc }
]

export default new VueRouter({
  mode: 'history',
  routes: routes
})