const newLocal='Login'
<template>
<div class="mb-2 col-md-6">
  <div class="container">
     <section class="bg-light pb-5 pt-5">
    <form class="form-signin" @submit.prevent="submit">
      <img
        class="mb-4"
        src="https://cdn4.vectorstock.com/i/1000x1000/89/13/user-login-icon-vector-21078913.jpg"
        alt=""
        width="72"
        height="72"
      />

      <h2 class="text-center">Ingreso Usuario</h2>

      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="text"
        id="inputEmail"
        class="form-control"
        placeholder="Email - Código"
        required
        autofocus
        v-model="form.username"
      />
      <label for="inputPassword" class="sr-only">Clave</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Clave.."
        required
        v-model="form.password"
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="recordar clave" /> Recordar Clave
        </label>
      </div>
     <!-- <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login()">
        Ingresar
      </button>-->
         <button type="submit">Submit</button>
      <p class="mt-5 mb-3 text-muted">2021</p>
    </form>
     </section>
  </div>
</div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  
  name: "Login",
  props: {
    msg: String,
  },  
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      
      /*const fusername= document.getElementById("inputEmail");
      const fpassword = document.getElementById("inputPassword");
      const User = {
                    username : fusername.value,
                    password : fpassword.value
                    };

      */

      try {
         
          await this.LogIn(User);
          this.$router.push("Ventas");
          this.showError = false
      } catch (error) {
        console.log(error)
        this.showError = true
      }
    },
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