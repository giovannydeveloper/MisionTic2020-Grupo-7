import Vue from "vue";
import Router from "vue-router";


import Inicial from './components/Inicial.vue';
import Categorias from './components/Categorias.vue';
import Usuarios from './components/Usuarios.vue';
import Productos from './components/Productos.vue';


Vue.use(Router)

export default new Router({
            routes: [{
                    path: "/Inicial",
                    name: "Inicial",
                    component: Inicial
                },
                {
                    path: "/Usuarios",
                    name: "Usuarios",
                    component: Usuarios
                },
                {
                    path: "/Categorias",
                    name: "Categorias",
                    component: Categorias
                },
                   
              {
                    path: "/Productos",
                    name: "Productos",
                    component: Productos
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
                    path: "/Facturas",
                    name: "Facturas",
                    component: Facturas
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
                }*/
            ]

            })