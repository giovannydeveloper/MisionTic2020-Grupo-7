const newLocal='Tercero'
<template>
  <div class="mb-2 col-md-9">
    <div class="container pb-2 pt-0">
      <section class="bg-light pb-5 pt-5">
        <form @submit.prevent="submit" id="form">
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
              
              <span class="input-group-text" id="inputGroup-sizing-sm">NIT</span>
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
              <span class="input-group-text" id="inputGroup-sizing-sm">Código</span>
              
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
                @click="GetCliente()"
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
              
                <span class="input-group-text" id="inputGroup-sizing-sm">Nombre/Razón Social</span>
              
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
                id="iptrazon"
                placeholder=""
              />
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-md-10">
                 <span class="input-group-text" id="inputGroup-sizing-sm">Dirección</span>
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
                   <span class="input-group-text" id="inputGroup-sizing-sm">Teléfono 1</span>
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
                 <span class="input-group-text" id="inputGroup-sizing-sm">Teléfono 2</span>
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
                   <span class="input-group-text" id="inputGroup-sizing-sm">Móvil</span>
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
            
                 <span class="input-group-text" id="inputGroup-sizing-sm">Estado</span>
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
                    <span class="input-group-text" id="inputGroup-sizing-sm">Tipo Tercero</span>
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
                  @click="CrearActualizar()"
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
                  @click="DelCliente()"
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Tercero",
  props: {
    msg: String,
  },

  methods: {
    async submit() {},
    async GetCliente() {
      const nit = document.getElementById("iptnit");
      const codigo = document.getElementById("iptcodigo");
      const razonsocial = document.getElementById("iptrazon");
      const direccion = document.getElementById("iptdireccion");
      const tel1 = document.getElementById("ipttel1");
      const tel2 = document.getElementById("ipttel2");
      const movil = document.getElementById("iptmovil");
      const estado = document.getElementById("cboestado");
      const tipo = document.getElementById("cbotipo");
      const ID = document.getElementById("inpID");

      if (codigo.value != "") {
        nit.value = codigo.nit;
      } else if (razonsocial.value != "") {
        nit.value = razonsocial.value;
      }

      const Clienteconsulta = {
        filtro: nit.value,
      };

      if (nit.value) {
        try {
          let datos = await axios.post(
            "http://localhost:4000/api/Terceros_buscar",
            Clienteconsulta
          );

          nit.value = datos.data[0].nit;
          codigo.value = datos.data[0].codigo;
          razonsocial.value = datos.data[0].nombre;
          direccion.value = datos.data[0].direccion;
          tel1.value = datos.data[0].telefono;
          tel2.value = datos.data[0].telefono2;
          movil.value = datos.data[0].movil;
          estado.value = datos.data[0].estado;
          tipo.value = datos.data[0].tipotercero;
          ID.value = datos.data[0]._id;

          this.flashMessage.info({
            title: "Cliente",
            message: "Cliente consultado con éxito",
          });
        } catch (error) {
          this.flashMessage.error({
            title: "Cliente",
            message: "Cliente No existe" || error,
          });
          codigo.value = "";
          nit.value = "";
          ID.value = "";
          razonsocial.value = "";
          direccion.value = "";
          tel1.value = "";
          tel2.value = "";
          movil.value = "";
          estado.value = "";
          tipo.value = "";
          console.log(error);
        }
      }
    },
    async PostCliente() {
      const nit = document.getElementById("iptnit");
      const codigo = document.getElementById("iptcodigo");
      const razonsocial = document.getElementById("iptrazon");
      const direccion = document.getElementById("iptdireccion");
      const tel1 = document.getElementById("ipttel1");
      const tel2 = document.getElementById("ipttel2");
      const movil = document.getElementById("iptmovil");
      const estado = document.getElementById("cboestado");
      const tipo = document.getElementById("cbotipo");
      const ID = document.getElementById("inpID");

      // const desadi = document.getElementById("inpDesadi");
      const Nuevocliente = {
        nit: nit.value,
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
          "http://localhost:4000/api/Terceros-nuevo",
          Nuevocliente
        );
        ID.value = datos.data._id;
        console.log(datos);
        //desadi.value="Nuevo Usuario creado" + datos.data.Idusuario;
        this.flashMessage.info({
          title: "Creación Cliente",
          message: "Cliente creado con éxito",
        });
        codigo.value = "";
        nit.value = "";
        ID.value = "";
        razonsocial.value = "";
        direccion.value = "";
        tel1.value = "";
        tel2.value = "";
        movil.value = "";
        estado.value = "";
        tipo.value = "";
      } catch (error) {
        this.flashMessage.error({
          title: "Creación Categorias",
          message: "Error en Creación" || error,
        });
        console.log(error);
      }
    },
    async DelCliente() {
      const nit = document.getElementById("iptnit");
      const codigo = document.getElementById("iptcodigo");
      const ID = document.getElementById("inpID");
      const razonsocial = document.getElementById("iptrazon");
      const direccion = document.getElementById("iptdireccion");
      const tel1 = document.getElementById("ipttel1");
      const tel2 = document.getElementById("ipttel2");
      const movil = document.getElementById("iptmovil");
      const estado = document.getElementById("cboestado");
      const tipo = document.getElementById("cbotipo");

      const filtro = document.getElementById("inpID").value;

      // const desadi = document.getElementById("inpDesadi");

      console.log(filtro);
      try {
        let datos = await axios.delete(
          `http://localhost:4000/api/Terceros/${filtro}`
        );
        this.flashMessage.info({
          title: "Borrado Cliente",
          message: "Cliente Borrado con éxito",
        });
        codigo.value = "";
        nit.value = "";
        ID.value = "";
        razonsocial.value = "";
        direccion.value = "";
        tel1.value = "";
        tel2.value = "";
        movil.value = "";
        estado.value = "";
        tipo.value = "";

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
      const nit = document.getElementById("iptnit");
      const codigo = document.getElementById("iptcodigo");
      const razonsocial = document.getElementById("iptrazon");
      const direccion = document.getElementById("iptdireccion");
      const tel1 = document.getElementById("ipttel1");
      const tel2 = document.getElementById("ipttel2");
      const movil = document.getElementById("iptmovil");
      const estado = document.getElementById("cboestado");
      const tipo = document.getElementById("cbotipo");
      const ID = document.getElementById("inpID");

      // const desadi = document.getElementById("inpDesadi");
      const Actualizarcliente = {
        id: ID.value,
        nit: nit.value,
        codigo: codigo.value,
        nombre: razonsocial.value,
        direccion: direccion.value,
        telefono: tel1.value,
        telefono2: tel2.value,
        movil: movil.value,
        estado: estado.value,
        tipotercero: tipo.value,
      };
      console.log(Actualizarcliente);
      try {
        let datos = await axios.put(
          "http://localhost:4000/api/Terceros-actualizar",
          Actualizarcliente
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
    CrearActualizar() {
      const ID = document.getElementById("inpID");
      console.log(ID.value);
      if (ID.value == "") {
        this.PostCliente();
      } else {
        this.PutCliente();
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