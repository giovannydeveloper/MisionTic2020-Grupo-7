const newLocal='Tercero'
<template>
  <div class="mb-2 col-md-9">
    <div class="container pb-2 pt-0">
      <form @submit.prevent="submit" id="form">
        <section class="bg-light pb-5 pt-5">
          <form>
            <div class="row">
              <div class="mb-3 col-md-3">
                <img
                  src="https://www.iusjuris.com/wp-content/uploads/2019/02/Businessman-Silhouette.jpg"
                  width="200"
                  height="200"
                />
              </div>
            </div>
            <div class="row">
                  <div class="mb-3 col-md-6">
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
              <div class="mb-3 col-md-4">
                <label class="form-label text-primary" for="iptnit">Nit</label>
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
                  id="iptnit"
                  placeholder=""
                />
              </div>
              <div class="mb-3 col-md-4">
                <label class="form-label text-primary" for="iptcodigo"
                  >Código</label
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
                  id="iptcodigo"
                  placeholder=""
                />
              </div>
              <div class="mb-3 col-md-4">
                <button
                  type="submit"
                  class="
                    btn btn-primary
                    ps-4
                    pe-4
                    rounded-0 rounded-pill
                    text-uppercase
                  "
                >
                  <span class="align-middle">Consultar</span>
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
            <div class="row">
              <div class="mb-3 col-md-10">
                <label class="form-label text-primary" for="iptcodigo"
                  >Nombre/Razón Social</label
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
                  id="iptcodigo"
                  placeholder=""
                />
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-md-10">
                <label class="form-label text-primary" for="iptcodigo"
                  >Dirección
                </label>
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
                  id="iptdireccion"
                  placeholder=""
                />
              </div>
              <div class="col-md-3 mb-3">
                <label class="form-label text-primary" for="iptcodigo"
                  >Teléfono 1
                </label>
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
                  id="ipttel1"
                  placeholder=""
                />
              </div>
              <div class="col-md-3 mb-3">
                <label class="form-label text-primary" for="iptcodigo"
                  >Teléfono 2
                </label>
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
                  id="ipttel2"
                  placeholder=""
                />
              </div>
              <div class="col-md-3 mb-3">
                <label class="form-label text-primary" for="iptcodigo"
                  >Móvil
                </label>
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
                  id="iptmovil"
                  placeholder=""
                />
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="inputTextarea" class="text-primary">Estado</label>
              <select
                id="cboestado"
                class="
                  bg-light
                  border-start-0 border-end-0 border-top-0
                  form-control
                  ps-0
                  pe-0
                  rounded-0
                "
              >
                <option disabled selected></option>
                <option>1-Activo</option>
                <option>2-Inactivo</option>
                <option>3-Bloqueado</option>
              </select>
            </div>
            <div class="mb-3 col-md-3">
              <label for="inputTextarea">Tipo Tercero</label>
              <select
                id="cbotipo"
                class="
                  bg-light
                  border-start-0 border-end-0 border-top-0
                  form-control
                  ps-0
                  pe-0
                  rounded-0
                "
              >
                <option disabled selected></option>
                <option>1-Cliente</option>
                <option>2-Proveedor</option>
                <option>3-Empleado</option>
                <option>4-Multiple</option>
              </select>
            </div>
            <div class="text-end">
              <div class="form-group row">
                <div class="col-md-3">
                  <button
                    type="submit"
                    class="
                      btn btn-primary
                      ps-4
                      pe-4
                      rounded-0 rounded-pill
                      text-uppercase
                    "
                  >
                    <span class="align-middle">Guardar</span>
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
                      ps-4
                      pe-4
                      rounded-0 rounded-pill
                      text-uppercase
                    "
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
            </div>
          </form>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "Tercero",
  props: {
    msg: String,
  },
/*
  methods: {
    async GetCliente() {
      //let resultadoElemento =document.getElementById("getResult");
      //resultadoElemento.innerHTML="";

      const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpdescripcion");
      const ID = document.getElementById("inpID");

      console.log(codigo.value);
      //  let NombreElemento =document.getElementById("inputLastName");
      if (codigo.value) {
        try {
          //let filtro='614feaa8649ab9e8feed6cdc'
          let datos = await axios.get(
            `http://localhost:4000/api/categorias/${codigo.value}`
          );
          console.log(datos);

          codigo.value = datos.data.codigo;
          descripcion.value = datos.data.nombre;
          ID.value = datos.data._id;
          this.flashMessage.info({
            title: "Cliente",
            message: "Cliente consultado con éxito",
          });
        } catch (error) {
          this.flashMessage.error({
            title: "Cliente",
            message: "Cliente No existe" || error,
          });
          console.log(error);
        }
      }
    },
    async PostCliente() {
      const nit = document.getElementById("inpcodigo");
      const codigo = document.getElementById("inpdescripcion");
      const razonsocial = document.getElementById("inpdescripcion");
      const direccion = document.getElementById("inpdescripcion");
      const tel1 = document.getElementById("inpdescripcion");
      const tel2 = document.getElementById("inpdescripcion");
      const movil = document.getElementById("inpdescripcion");
      const estado = document.getElementById("inpdescripcion");
      const tipo = document.getElementById("inpdescripcion");
      const ID = document.getElementById("inpID");

      // const desadi = document.getElementById("inpDesadi");
      const Nuevocliente = {
        nit: nit.va,
        codigo: codigo.value,
        nombre: razonsocial.value,
        direccion: direccion.value,
        telefono: tel1.value,
        telefono2: tel2.value,
        movil: movil.value,
        estado: estado.value,
        tipotercero: tipo.value,
      };

      console.log(Nuevocliente);
      try {
        let datos = await axios.post(
          "http://localhost:4000/api/Cliente-nuevo",
          Nuevocliente
        );
        ID.value = datos.data._id;
        console.log(datos);
        //desadi.value="Nuevo Usuario creado" + datos.data.Idusuario;
        this.flashMessage.info({
          title: "Creación Cliente",
          message: "Cliente creado con éxito",
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Creación Categorias",
          message: "Error en Creación" || error,
        });
        console.log(error);
      }
    },
    async DelCliente() {
      const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpdescripcion");
      const ID = document.getElementById("inpID");

      const filtro = document.getElementById("inpID").value;

      // const desadi = document.getElementById("inpDesadi");

      console.log(filtro);
      try {
        let datos = await axios.delete(
          `http://localhost:4000/api/Categorias/${filtro}`
        );
        this.flashMessage.info({
          title: "Borrado Cliente",
          message: "Cliente Borrado con éxito",
        });
        codigo.value = "";
        descripcion.value = "";
        ID.value = "";
        console.log(datos);
      } catch (error) {
        this.flashMessage.error({
          title: "Borrado de CAtegoria",
          message: "Error en Borrado" || error,
        });
        console.log(error);
      }
    },
    async PutCliente() {
      const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpdescripcion");
      const ID = document.getElementById("inpID");

      const Actualizacategoria = {
        codigo: codigo.value,
        nombre: descripcion.value,
        id: ID.value,
      };
      console.log(Actualizacategoria);
      try {
        let datos = await axios.put(
          "http://localhost:4000/api/Categorias-actualizar",
          Actualizacategoria
        );
        ID.value = datos.data._id;
        console.log(datos);

        this.flashMessage.info({
          title: "Actualización Cliente",
          message: "Cliente Creado con éxito",
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Actualización Cliente",
          message: "Error en Acrualizacion" || error,
        });
        console.log(error);
      }
    },
  },*/
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