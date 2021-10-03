const newLocal='Usuarios'
<template>
  <div>
    <div class="container"></div>
    <section class="bg-light pb-5 pt-5">
      <div class="container pb-2 pt-0">
        <form>
          <div class="row">
            <div class="input-group input-group-sm mb-2">
              <span class="input-group-text" id="inputGroup-sizing-sm">ID</span>
              <input
                type="text"
                class="
                  bg-light
                  border-start-0 border-end-0 border-top-0
                  form-control
                  ps-0
                  pe-0
                  rounded-0
                "
                id="inpID"
              />
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-md-12">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Código</span
              >
              <input
                type="text"
                class="
                  bg-light
                  border-start-0 border-end-0 border-top-0
                  form-control
                  ps-0
                  pe-0
                  rounded-0
                "
                id="inpCodigo"
                placeholder="Ingrese Código"
              />
            </div>
          </div>
          <div class="row">
            <div class="mb-2 col-md-8">
              <button
                type="submit"
                class="
                  btn btn-primary
                  ps-4
                  pe-2
                  rounded-0 rounded-pill
                  text-uppercase
                "
                v-click
                @click="GetUsuario()"
              >
                >
                <span class="align-middle">Consultar</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="12"
                  width="16"
                  class="ms-1"
                >
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-md-12">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Nombres</span
              >
              <input
                type="text"
                class="
                  bg-light
                  border-start-0 border-end-0 border-top-0
                  form-control
                  ps-0
                  pe-0
                  rounded-0
                "
                id="inpNombre"
                placeholder="Ingrese apellidos completos..."
              />
            </div>
          </div>

          <div class="row">
            <div class="mb-3 col-md-6">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Email</span
              >
              <input
                type="email"
                class="
                  bg-light
                  border-start-0 border-end-0 border-top-0
                  form-control
                  ps-0
                  pe-0
                  rounded-0
                "
                id="inputEmail"
                placeholder="Ingrese email..."
              />
            </div>
            <div class="col-md-6 mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Clave</span
              >
              <input
                type="text"
                class="
                  bg-light
                  border-start-0 border-end-0 border-top-0
                  form-control
                  ps-0
                  pe-0
                  rounded-0
                "
                id="inpClave"
                placeholder="Ingrese Clave Mínimo 8 Caracteres, Mayúscula Inicial..."
              />
            </div>
          </div>
          <div class="mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm"
              >Descripción Adicional</span
            >
            <textarea
              class="
                bg-light
                border-start-0 border-end-0 border-top-0
                form-control
                ps-0
                pe-0
                rounded-0
              "
              rows="6"
              id="inpDesadi"
              placeholder=""
            ></textarea>
          </div>
          <div class="form-group row">
            <div class="col-md-4">
              <button
                type="submit"
                class="
                  btn btn-primary
                  ps-6
                  pe-6
                  rounded-0 rounded-pill
                  text-uppercase
                "
                @click="PostUsuario()"
              >
                <span class="align-middle">Crear</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="16"
                  width="16"
                  class="ms-1"
                >
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="col-md-4">
              <button
                type="submit"
                class="
                  btn btn-primary
                  ps-6
                  pe-6
                  rounded-0 rounded-pill
                  text-uppercase
                "
                @click="PutUsuario()"
              >
                <span class="align-middle">Actualizar</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="16"
                  width="16"
                  class="ms-1"
                >
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="col-md-4">
              <button
                type="submit"
                class="
                  btn btn-primary
                  ps-6
                  pe-6
                  rounded-0 rounded-pill
                  text-uppercase
                "
                @click="DelUsuario()"
              >
                <span class="align-middle">Eliminar</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="16"
                  width="16"
                  class="ms-1"
                >
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Usuarios",
  props: {
    msg: String,
  },
  data() {
    return {
      usuario: [].length,
      filtro: 5,
    };
  },

  methods: {
    async GetUsuario() {
       const filtro = document.getElementById("inpCodigo").value;
      const nombre = document.getElementById("inpNombre");
      const usuario = document.getElementById("inputEmail");
      const clave = document.getElementById("inpClave");
      const DesAdi = document.getElementById("inpDesadi");
      const ID = document.getElementById("inpID");

      console.log(ID.value);
      //  let NombreElemento =document.getElementById("inputLastName");
      if (filtro) {
        try {
          //let filtro='614feaa8649ab9e8feed6cdc'
          let datos = await axios.get(
            `http://localhost:4000/api/usuario/${filtro}`
          );
          console.log(datos);

          //console.log(await datos.data.nombre);
          nombre.value = datos.data.nombre;
          usuario.value = datos.data.email;
          clave.value = datos.data.clave;
          DesAdi.value = datos.data.Descripcion;
          ID.value = datos.data._id;
          this.flashMessage.info({
            title: " Usuarios",
            message: "Usuarios consultado con éxito",
          });
        } catch (error) {
          this.flashMessage.error({
            title: " Usuarios",
            message: "Usuario No existe" || error,
          });
          nombre.value = "";
          usuario.value = "";
          clave.value = "";
          DesAdi.value = "";
          ID.value = 0;
          console.log(error);
        }
      }
    },
    async PostUsuario() {
      const filtro = document.getElementById("inpCodigo");
      const nombre = document.getElementById("inpNombre");
      const email = document.getElementById("inputEmail");
      const clave = document.getElementById("inpClave");
      const ID = document.getElementById("inpID");

      // const desadi = document.getElementById("inpDesadi");
      const Nuevousuario = {
        codigo: filtro.value,
        nombre: nombre.value,
        clave: clave.value,
        email: email.value,
      };
      console.log(Nuevousuario);
      try {
        let datos = await axios.post(
          "http://localhost:4000/api/usuario-nuevo",
          Nuevousuario
        );
        ID.value = datos.data._id;
        console.log(datos);
        //desadi.value="Nuevo Usuario creado" + datos.data.Idusuario;
        this.flashMessage.info({
          title: "Creación Usuarios",
          message: "Usuarios Creado con éxito",
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Creación Usuarios",
          message: "Error en Creación" || error,
        });
        console.log(error);
      }
    },
    async DelUsuario() {
      //let resultadoElemento =document.getElementById("getResult");
      //resultadoElemento.innerHTML="";

      const filtro = document.getElementById("inpID").value;

      // const desadi = document.getElementById("inpDesadi");

      console.log(filtro);
      try {
        let datos = await axios.delete(
          `http://localhost:4000/api/usuario/${filtro}`
        );
        this.flashMessage.info({
          title: "Borrado Usuarios",
          message: "Usuarios Borrado con éxito",
        });
        console.log(datos);
        //desadi.value="Nuevo Usuario creado" + datos.data.Idusuario;
      } catch (error) {
        this.flashMessage.error({
          title: "Borrado de Usuarios",
          message: "Error en Borrado" || error,
        });
        console.log(error);
      }
    },
    async PutUsuario() {
      //let resultadoElemento =document.getElementById("getResult");
      //resultadoElemento.innerHTML="";

      const filtro = document.getElementById("inpCodigo");
      const nombre = document.getElementById("inpNombre");
      const email = document.getElementById("inputEmail");
      const clave = document.getElementById("inpClave");
      const ID = document.getElementById("inpID");

      // const desadi = document.getElementById("inpDesadi");
      const Actualizarusuario = {
        id: ID.value,
        codigo: filtro.value,
        nombre: nombre.value,
        clave: clave.value,
        email: email.value,
      };
      console.log(Actualizarusuario);
      try {
        let datos = await axios.put(
          "http://localhost:4000/api/usuario_actualizar",
          Actualizarusuario
        );
        ID.value = datos.data._id;
        console.log(datos);
        //desadi.value="Nuevo Usuario creado" + datos.data.Idusuario;
        this.flashMessage.info({
          title: "Creación Usuarios",
          message: "Usuarios actualizado con éxito",
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Creación Usuarios",
          message: "Error en Actualizacion" || error,
        });
        console.log(error);
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