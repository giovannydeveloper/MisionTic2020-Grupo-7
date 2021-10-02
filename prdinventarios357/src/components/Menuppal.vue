const newLocal='Menuppal'
<template>
  <div id="nav">
     
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">SIG735</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler42"
          aria-controls=""
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarToggler42">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
             <a class="nav-link active" href="#">
                    <router-link  to="/Inicio" class="nav-item nav-link">
             
               Inicio
            
                </router-link>

              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                    <router-link  to="/Usuarios" class="nav-item nav-link">
             
               Usuarios
            
                </router-link>

              </a>
            </li>
            
            <li class="nav-item">
                 <a class="nav-link active" href="#">
                    <router-link  to="/Categorias" class="nav-item nav-link">
             
               Categorias
            
                </router-link>
                </a>
                </li> 
            
            <li class="nav-item">
              <a class="nav-link active" href="#">
                    <router-link  to="/Productos" class="nav-item nav-link">
             
               Productos
            
                </router-link>
                </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" href="#">Compras</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Ventas</a>
            </li>

            <li class="nav-item">
            <a class="nav-link active" href="#">
                    <router-link  to="/Carrito" class="nav-item nav-link">
             
               Carrito
            
                </router-link>
                </a>
            </li>
          </ul>

          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar.."
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
      
  </div>
 
</template>
<script>
export default {
  name: "Menuppal",
  props: {
    msg: String,
  },
};
</script > 
<style scoped>
h3 {
  margin: 40px 0 0;
}

h1 {
  margin: 40px 0 0;
}
</style> 