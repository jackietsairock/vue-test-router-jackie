import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import NotFoundComponent from '../views/NotFoundComponent.vue';
// import Rwd from '../views/Rwd.vue';
// import Vue from '../views/Vue.vue';
// import React from '../views/React.vue';
// import Html5 from '../views/Html5.vue';
// import Node from '../views/Node.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rwd',
    name: 'rwd',
    component: () => import('../views/Rwd.vue')
  
  },
  {
    path: '/vue',
    name: 'vue',
    component: () => import('../views/Vue.vue')
  },
  {
    path: '/react',
    name: 'react',
    component: () => import('../views/React.vue')
  },
  {
    path: '/html5',
    name: 'html5',
    component: () => import('../views/Html5.vue')
  },
  {
    path: '/node',
    name: 'node',
    component: () => import('../views/Node.vue')
  },
  { path: '/:pathMatch(.*)', component: NotFoundComponent }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
