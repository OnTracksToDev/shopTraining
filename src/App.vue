<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import MainLayout from '@/components/Layout/MainLayout.vue'
import MainNav from '@/components/Layout/MainNav.vue'

let NavItemsArray = ref([
  {
    name: 'Home',
    link: '/',
    target: '_self',
    class: 'nav-link'
  },
  {
    name: 'Articles',
    link: '/articles',
    target: '_self',
    class: 'nav-link'
  },
  {
    name: 'Panier',
    link: '/panier',
    target: '_self',
    class: 'nav-link'
  },
  {
    name: 'Quiz',
    link: '/quiz',
    target: '_self',
    class: 'nav-link'
  },
  {
    name: 'Admin',
    link: '/admin',
    target: '_self',
    class: 'nav-link'
  }

])
let UserNavItemsArray = ref([
  {
    name: 'Settings',
    link: '#',
    target: '_self'
  },
  {
    name: 'Profile',
    link: '#',
    target: '_self'
  }
])
</script>

<template>
  <main-layout>
    <template v-slot:header>
      <main-nav :navItems="NavItemsArray" :userNavItems="UserNavItemsArray"> </main-nav>
    </template>
    <RouterView />
  </main-layout>
</template>

<style scoped></style>
