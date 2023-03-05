import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/page/index.vue';
import About from '@/page/about.vue';

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {path:'/', component:Index},
    {path:'/about', component:About},
  ]
})

export default router;