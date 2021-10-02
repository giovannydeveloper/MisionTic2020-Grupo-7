const newLocal='Login'
<template>
  <div class="container">
    <form class="form-signin">
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
      />
      <label for="inputPassword" class="sr-only">Clave</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Clave.."
        required
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="recordar clave" /> Recordar Clave
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login()">
        Ingresar
      </button>
      <p class="mt-5 mb-3 text-muted">2021</p>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
  methods: {
    login() {
      const usuario = document.getElementById("inputEmail").value;
      const clave = document.getElementById("inputPassword").value;
      if (usuario == "admin" && clave == "pass") {
       
         this.flashMessage.info({title: ' Usuarios', message: 'Usuarios registrado con éxito'});
      } else {
        console.log("The username and / or password is incorrect");
          this.flashMessage.error({title: ' Usuarios', message: 'Usuario o clave es incorrecto' });
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