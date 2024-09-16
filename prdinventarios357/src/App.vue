<template>
  <div class="container">
    <div>
      <div class="navbar navbar-expand-lg navbar-light bg-light">
        <img
          class="navbar-logo mb-0 col-md-1 img-fluid"
          alt="Vue logo"
          src="https://i.pinimg.com/550x/60/2b/6a/602b6a3d4119e0df60b0441c9e08cd98.jpg"
        />
        <img
          class="navbar-logo mb-1 col-md-2 img-fluid"
          alt="Vue logo"
          src="https://3.bp.blogspot.com/-6E7PzezxRqY/XLKkVVFl7fI/AAAAAAAAAME/53_d_kuXRfcnR1HrP7sNNrphlT_xaH2wQCK4BGAYYCw/s1600/grupo7%2B%25282%2529.png"
        />
      </div>
     
     
      <Menuppal />
        
    </div>
    <hr />
      <main>
    <div class="row">
     
      <FlashMessage></FlashMessage>
       <router-view></router-view>
      <div>
     
      </div>
    </div>
     </main>
    <hr />
    <blockquote class="blockquote mb-0">
    
    
      <footer class="container-fluid text-center">
        <div class="blockquote-footer navbar-inverse navbar-fixed-bottom">
          <Piepagina />
        </div>
      </footer>
    </blockquote>
  </div>
</template>


<script>
import Menuppal from "./components/Menuppal.vue";
import Piepagina from "./components/Piepagina.vue";
//import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
  Menuppal,
    Piepagina,

  //  Login,
  },

};
</script>

<style lang="scss">
//@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
