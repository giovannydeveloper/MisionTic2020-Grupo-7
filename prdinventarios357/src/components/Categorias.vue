const newLocal='Categorias'
<template>
  <!--  <section class="bg-light pb-5 pt-5">-->
  <!--   <div class="mb-3 col-md-12">
        <span class="input-group-text" id="inputGroup-sizing-sm"
          >CATEGORIAS</span
        >
      </div>
      -->
  <div class="mb-2 col-md-6">
    <div class="container"></div>
    <section class="bg-light pb-5 pt-5">
      <div class="container pb-2 pt-0">
        <form @submit.prevent="submit" id="form">
          <div class="row">
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
                id="inpcodigo"
                placeholder=""
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
                @click="GetConsulta()"
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
             <div>
                      <b-form-checkbox
                        id="chktodos"
                        v-model="Valorchk"
                        name="checkbox-1"
                        value="V"
                        unchecked-value="F"
                      
                      >
                        Consultar Todos
                      </b-form-checkbox>
                                          
  </div>
          </div>
 
          <div class="row">
            <div class="mb-3 col-md-12">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Descripción</span
              >
              <input
                type="text"
                class="form-control rounded-0"
                id="inpdescripcion"
                placeholder=""
              />
            </div>
            <div class="row"></div>
          </div>
          <div class="btn-toolbar" role="toolbar">
            <div class="btn-group mr-2" role="group">
              <button
                type="submit"
                class="
                  btn btn-primary
                  ps-4
                  pe-2
                  rounded-0 rounded-pill
                  text-uppercase
                  btn-md
                "
                @click="PostCategoria()"
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
            <div class="btn-group mr-2" role="group">
              <button
                type="submit"
                class="
                  btn btn-primary
                  ps-4
                  pe-2
                  rounded-0 rounded-pill
                  text-uppercase
                  btn-md
                "
                @click="PutCategoria()"
              >
                <span class="align-middle">Actualizar</span>
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
            <div class="btn-group mr-2" role="group">
              <button
                type="submit"
                class="
                  btn btn-primary
                  ps-4
                  pe-2
                  rounded-0 rounded-pill
                  text-uppercase
                  btn-md
                "
                @click="DelCategoria()"
              >
                <span class="align-middle">Eliminar</span>
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
          <div>
          <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="Categoria in TodasCategorias" v-bind:key="Categoria.codigo">
                    <td>{{Categoria.codigo}}</td>
                    <td>{{Categoria.nombre}}</td>
                    <td>{{Categoria.estado}}</td>
                </tr>
            </tbody>
        </table>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Categorias",
  props: {
    msg: String,
    
  },
  data(){
    return {
      Valorchk : "f",
      TodasCategorias:[]
    };
  
  },

 
  methods: {
    async GetCategoria() {
      
      const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpdescripcion");
      const ID = document.getElementById("inpID");

      console.log(codigo.value);
      
      if (codigo.value) {
        try {
          
          let datos = await axios.get(
            //`http://localhost:4000/api/categorias/${codigo.value}`
            `https://rocky-shelf-58294.herokuapp.com/api/categorias/${codigo.value}`
            

          );
          console.log(datos);

          
          codigo.value = datos.data.codigo;
          descripcion.value = datos.data.nombre;
          ID.value = datos.data._id;
          this.flashMessage.info({
            title: "Categorias",
            message: "Categorias consultada con éxito",
          });
        } catch (error) {
          this.flashMessage.error({
            title: "Categorias",
            message: "Categorias No existe" || error,
          });
          console.log(error);
        }
      }
    },
    async PostCategoria() {
      //let resultadoElemento =document.getElementById("getResult");
      //resultadoElemento.innerHTML="";

      const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpdescripcion");
      const ID = document.getElementById("inpID");


      // const desadi = document.getElementById("inpDesadi");
      const Nuevacategoria = {
        codigo: codigo.value,
        nombre: descripcion.value,
        
      };
      console.log(Nuevacategoria);
      try {
        let datos = await axios.post(
          //"http://localhost:4000/api/Categorias-nuevo",
          "https://rocky-shelf-58294.herokuapp.com/api/Categorias-nuevo"  ,        
          Nuevacategoria
        );
        ID.value = datos.data._id;
        console.log(datos);
        //desadi.value="Nuevo Usuario creado" + datos.data.Idusuario;
        this.flashMessage.info({
          title: "Creación Categorias",
          message: "Categoriaa creada con éxito",
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Creación Categorias",
          message: "Error en Creación" || error,
        });
        console.log(error);
      }
    },
    async DelCategoria() {
     const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpdescripcion");
      const ID = document.getElementById("inpID");

      const filtro = document.getElementById("inpID").value;

      // const desadi = document.getElementById("inpDesadi");

      console.log(filtro);
      try {
        let datos = await axios.delete(
          //`http://localhost:4000/api/Categorias/${filtro}`
          `https://rocky-shelf-58294.herokuapp.com/api/Categorias/${filtro}`

        );
        this.flashMessage.info({
          title: "Borrado Categorias",
          message: "Categoría Borrado con éxito",
        });
        codigo.value="";
        descripcion.value="";
        ID.value="";
        console.log(datos);
        
      } catch (error) {
        this.flashMessage.error({
          title: "Borrado de CAtegoria",
          message: "Error en Borrado" || error,
        });
        console.log(error);
      }
    },
    async PutCategoria() {
     
      const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpdescripcion");
      const ID = document.getElementById("inpID");
     
      const Actualizacategoria = {
        codigo: codigo.value,
        nombre: descripcion.value,
        id:ID.value

      };
      console.log(Actualizacategoria);
      try {
        let datos = await axios.put(
          //"http://localhost:4000/api/Categorias-actualizar",
          "https://rocky-shelf-58294.herokuapp.com/api/Categorias-actualizar",
          Actualizacategoria
        );
        ID.value = datos.data._id;
        console.log(datos);

        this.flashMessage.info({
          title: "Actualización Categorias",
          message: "Categoria Creada con éxito",
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Actualización Categorias",
          message: "Error en Creación" || error,
        });
        console.log(error);
      }
    },
      async GetTodasCategoria() {
     
     
      //  let NombreElemento =document.getElementById("inputLastName");
     // if (codigo.value) {
        try {
          //let filtro='614feaa8649ab9e8feed6cdc'
          let datos = await axios.get(
            //"http://localhost:4000/api/categorias/"
            "https://rocky-shelf-58294.herokuapp.com/api/categorias/"
          );
          console.log(datos);
          this.TodasCategorias=datos.data;
          
       
          this.flashMessage.info({
            title: "Categorias",
            message: "Categorias consultada con éxito",
          });
        } catch (error) {
          this.flashMessage.error({
            title: "Categorias",
            message: "Categorias No existe" || error,
          });
          console.log(error);
        }
    //  }
    },
    GetConsulta(){
      
      const todos = this.Valorchk
          const codigo = document.getElementById("inpcodigo");
       console.log(this.Valorchk)
     if (todos == "V")
      {
       this.GetTodasCategoria();
      }
      else if (codigo.value=="") {
           this.flashMessage.info({
            title: "Categorias",
            message: "No ha seleccionado categoria" ,
          });
      }
      else
      {
        this.GetCategoria();
      }

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