import Vue from 'vue'
import VueRouter from 'vue-router'

import UserProfile from '@/components/UserProfile.vue'
import About from '@/components/About.vue'
import LogIn from '@/components/LogIn.vue'
import SignUp from '@/components/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: UserProfile },
  { path: '/log-in', component: LogIn },
  { path: '/about', component: About },
  { path: '/sign-up', component: SignUp }
]

export default new VueRouter({
  mode: 'history',
  routes: routes
})