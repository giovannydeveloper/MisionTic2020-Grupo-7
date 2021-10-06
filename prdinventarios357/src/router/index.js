import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";


import Inicial from '../components/Inicial.vue';
import Categorias from '../components/Categorias.vue';
import Usuarios from '../components/Usuarios.vue';
import Productos from '../components/Productos.vue';
//import Carrito from './components/Carrito.vue';
import Login from '../components/Login.vue';
import Ventas from '../components/Ventas.vue';
import Cliente from '../components/Cliente.vue';

Vue.use(VueRouter)

const routes = [
                {
                    path: '/',
                    name:'Inicial',
                    component : Inicial
                },
                {
                    path: "/Login",
                    name: "Login",
                    component: Login,
                    meta: { guest: true },
                },
               /* 
                {
                    path: "/Inicial",
                    name: "Inicial",
                    component: Inicial
                },
                */
                {
                    path: "/Usuarios",
                    name: "Usuarios",
                    component: Usuarios,
                    meta: { guest: true },
                },
                {
                    path: "/Categorias",
                    name: "Categorias",
                    component: Categorias,
                    meta: {requiresAuth: true},
                },
                   
                 
              {
                    path: "/Productos",
                    name: "Productos",
                    component: Productos,
                    meta: {requiresAuth: true},
                },
                {
                    path: "/Cliente",
                    name: "Cliente",
                    component: Cliente,
                    meta: {requiresAuth: true},
                },
                
                {
                    path: "/Ventas",
                    name: "Ventas",
                    component: Ventas,
                    meta: {requiresAuth: true},
                },
        /*      
                {
                    path: "/Bodegas",
                    name: "Bodegas",
                    component: Bodegas
                },
                {
                    path: "/Tipos",
                    name: "Tipos",
                    component: Tipos
                },
                
                {
                    path: "/Compras",
                    name: "Compras",
                    component: Compras
                },
                
                {
                    path: "/Carrito",
                    name: "Carrito",
                    component: Carrito
                } 
                */
            ]

            const router = new VueRouter({
                mode: 'history',
                base: process.env.BASE_URL,
                routes
              })
              
              router.beforeEach((to, from, next) => {
                if(to.matched.some(record => record.meta.requiresAuth)) {
                  if (store.getters.isAuthenticated) {
                    next()
                    return
                  }
                  next('/login')
                } else {
                  next()
                }
              })
              router.beforeEach((to, from, next) => {
                if (to.matched.some((record) => record.meta.guest)) {
                  if (store.getters.isAuthenticated) {
                    next("/");
                    return;
                  }
                  next();
                } else {
                  next();
                }
              });
              export default router    