<template>
  <div id="app">
    <div v-if="shouldShowSidebar">
      <nav class="navbar navbar-dark bg-primary">
        <b-button variant="outline-primary"
          v-b-toggle.sidebar-variant>
          <span class="navbar-toggler-icon"></span>
          <img class="logo" src="@/assets/logo.png"/>
        </b-button>
        <div class="d-flex justify-content-end">
        <router-link to="/about" class="">
          <b-button variant="outline-light">
            About
          </b-button>
        </router-link>
        <router-link to="/log-in">
          <b-button variant="primary">
            Log out
          </b-button>
        </router-link>
        </div>
      </nav>
      <b-sidebar id="sidebar-variant" title="Sidebar"
        bg-variant="dark" text-variant="light" shadow>
        <router-link to="/" class="d-flex justify-content-center">
          <img class="w-75" src="@/assets/default-user-photo.png"/>
        </router-link>
        <div class="d-flex justify-content-center">
          <b-navbar toggleable type="dark" variant="dark" 
            class="d-flex justify-content-center">
            <b-navbar-brand href="#">Calculator</b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
              <template #default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
              </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">
                  <router-link to="/ordinary-calc">
                    Ordinary Calc
                  </router-link>
                </b-nav-item>
                <b-nav-item href="#">
                  <router-link to="/programming-calc">
                    Programming Calc
                  </router-link>
                </b-nav-item>
                <b-nav-item href="#" disabled>
                  Type of calculator
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </b-sidebar>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import Sidebar from '@/components/Sidebar'
// import Router from 'vue-router'
// import LogIn from '@/components/LogIn.vue'
// import Subpage from '@/components/Subpage.vue'
// import ProgrammingCalc from '@/components/ProgrammingCalc'
export default {
  name: 'App',
  components: {
    // ProgrammingCalc
    // Subpage
    // Sidebar
    // LogIn
  },
  computed:{
    shouldShowSidebar(){
      return this.$route.meta.sidebar!==false;
    }
  }
}
</script>

<style>
.logo {
  width: 15vw;
  height: 4vh;
}
</style>
