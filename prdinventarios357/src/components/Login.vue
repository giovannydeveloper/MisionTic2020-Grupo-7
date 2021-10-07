const newLocal='Login'
<template>
  <div class="mb-2 col-md-6">
    <div class="container">
      <section class="bg-light pb-5 pt-5">
        <form class="form-signin" @submit.prevent="submit" id="form">
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
            id="Email"
            class="form-control"
            placeholder="Email - Código"
            required
            autofocus
            name="username"
          />
          <label for="inputPassword" class="sr-only">Clave</label>
          <input
            type="password"
            id="Password"
            class="form-control"
            placeholder="Clave.."
            required
            name="password"
          />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="recordar clave" /> Recordar Clave
            </label>
          </div>
          <!-- <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login()">
        Ingresar
         type="submit"
      </button>-->
          <button
            type="submit"
            class="
              btn btn-primary
              ps-4
              pe-2
              rounded-0 rounded-pill
              text-uppercase
            "
          >
            Ingresar
          </button>
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
      /*   form: {
        username: "",
        password: "",
      },
*/ showError: false,
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      try {
        const codigo = document.getElementById("Email");
        const clave = document.getElementById("Password");

        const Nuevousuario = {
          codigo: codigo.value,
          clave: clave.value,
        };

       // console.log(Nuevousuario);
       

        const rtp= await this.LogIn(Nuevousuario);
        console.log(rtp);
        if (rtp.data.length == 0 )
        {
           
        this.flashMessage.error({
          title: "Usuarios",
          message: "Usuarios o Clave no valido ",

        });
          this.logout();
        }
        else
        {
          this.flashMessage.info({
          title: "Usuarios",
          message: "Registrado con exito",
        });
        // this.$router.push("Ventas");
        this.showError = false;
        this.$router.push("Ventas");
        this.showError = false;
        }
        
        
      } catch (error) {
       
        this.showError = true;
      }
    },
    
     ...mapActions(["LogOut"]),
      async logout (){
          await this.$store.commit('LogOut')
       // await this.$store.dispatch('LogOut')
        this.$router.push('/Login')
      }
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