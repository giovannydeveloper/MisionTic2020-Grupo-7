import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home.vue"
import Usuario from "./views/Usuarios.vue"
import Categorias from "./views/Categorias.vue"
import Productos from "./views/Productos.vue"
import Bodegas  from "./views/Bodega.vue"
import Tipos  from "./views/Tipos.vue"
import Facturas  from "./views/Facturas.vue"
import Compras  from "./views/Compras.vue"
import Carrito from "./views/Carrito.vue"
import { component } from "vue/types/umd";

Vue.use(VueRouter)

const routes =
[    
    {
        path: "/",
        name:  "Home",
        component: Usuario
    },
    {
        path: "/Usuarios",
        name:  "Usuarios",
        component: Usuario
    },
    {
        path: "/Categorias",
        name:  "Categorias",
        component: Categorias
    },
    {
        path: "/Productos",
        name:  "Productos",
        component: Productos
    },
    {
        path: "/Bodegas",
        name:  "Bodegas",
        component: Bodegas
    },
    {
        path: "/Tipos",
        name:  "Tipos",
        component: Tipos
    },
    {
        path: "/Facturas",
        name:  "Facturas",
        component: Facturas
    },
    {
        path: "/Compras",
        name:  "Compras",
        component: Compras
    },
    {
        path: "/Carrito",
        name:  "Carrito",
        component: Carrito
    }
    

];
