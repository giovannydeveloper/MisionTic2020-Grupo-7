const newLocal='Ventas'
<template>
  <div class="container">
    <section class="bg-light pb-0 pt-0">
      <div class="container pb-5 pt-0">
        <h2 class="text-center">DOCUMENTOS</h2>
        <form @submit.prevent="submit" id="form">
          <div class="row">
            <div class="mb-3 col-md-4">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Fecha</span
              >
              <div class="form-group">
                <div clase="input-group date">
                  <b-form-datepicker
                    v-model="date"
                    placeholder="dd/mm/yyyy"
                    id="idfecha"
                    :date-format-options="{
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    }"
                  ></b-form-datepicker>
                </div>
              </div>
            </div>
            <div class="mb-3 col-md-6">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Condición Pago</span
              >

              <select
                id="idforma"
                class="
                  bg-light
                  border-start-0 border-end-0 border-top-0
                  form-control
                  ps-0
                  pe-0
                  rounded-0
                "
              >
                <option disabled selected>Contado</option>
                <option>Crèdito</option>
              </select>
            </div>
            <div class="mb-3 col-md-2"></div>
          </div>
          <div class="row">
            <div class="mb-3 col-md-8">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Documento</span
              >

              <select
                id="seldocumento"
                name="documentos"
                class="
                  bg-light
                  border-start-0 border-end-0 border-top-0
                  form-control
                  ps-0
                  pe-0
                  rounded-0
                "
              >
                <option
                  v-for="(tipo, index) in tipos"
                  :key="index"
                  :value="tipo.prefijo"
                >
                  {{ tipo.nombre }}
                </option>
              </select>
            </div>
            <div class="mb-3 col-md-2">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Número</span
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
                id="inpnumero"
                placeholder=""
              />
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-md-9">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Bodega</span
              >
              <select
                id="selbodega"
                name="bodegas"
                class="
                  bg-light
                  border-start-0 border-end-0 border-top-0
                  form-control
                  ps-0
                  pe-0
                  rounded-0
                "
              >
                <option
                  v-for="(bodega, index) in bodegas"
                  :key="index"
                  :value="bodega.codigo"
                >
                  {{ bodega.nombre }}
                </option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-md-7">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Cliente</span
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
                id="inpcliente"
                placeholder=""
              />
            </div>
            <div class="mb-3 col-md-1.5">
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
                <span class="align-middle">...</span>
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
            <div class="mb-3 col-md-4">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Nit</span
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
                id="inpnit"
                placeholder=""
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3">
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
            <div class="col-md-2 mb-3">
              <button
                type="submit"
                class="
                  btn btn-primary
                  ps-4
                  pe-4
                  rounded-0 rounded-pill
                  text-uppercase
                "
                @click="GetProducto()"
              >
                <span class="align-middle">Buscar</span>
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
            <div class="col-md-7 mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Descripción</span
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
                id="inpdescripcion"
                placeholder=""
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Cantidad</span
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
                id="inpcantidad"
                placeholder=""
              />
            </div>
            <div class="col-md-2">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Precio Und</span
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
                id="inpprecio"
                placeholder=""
              />
            </div>
            <div class="col-md-2">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >% Dcto</span
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
                id="inpdcto"
                placeholder=""
              />
            </div>
            <div class="col-md-2">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >% IVA</span
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
                id="inpiva"
                placeholder=""
              />
            </div>

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
                @click="AdicionarItem()"
              >
                <span class="align-middle">Adicionar</span>
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
            <div class="col-md-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">codigo</th>
                    <th scope="col">descripcion</th>
                    <th scope="col">cantidad</th>
                    <th scope="col">Precio Und</th>
                    <th scope="col">% Dcto</th>
                    <th scope="col">% Iva</th>
                    <th scope="col">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in items" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>
                      <input
                        type="text"
                        class="bg-light form-control ps-0 pe-0 rounded-0"
                        v-model="item.codigo"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        class="bg-light form-control ps-0 pe-0 rounded-0"
                        v-model="item.descripcion"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="bg-light form-control ps-0 pe-0 rounded-0"
                        v-model="item.cantidad"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="bg-light form-control ps-0 pe-0 rounded-0"
                        v-model="item.precio"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="bg-light form-control ps-0 pe-0 rounded-0"
                        v-model="item.dcto"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="bg-light form-control ps-0 pe-0 rounded-0"
                        v-model="item.iva"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="bg-light form-control ps-0 pe-0 rounded-0"
                        v-model="item.subtotal"
                      />
                    </td>
                    <td>
                      <button
                        class="btn btn-primary btn-xs"
                        @click="EliminarItem"
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-md-12">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm"
                  >Subtotal</span
                >
                <span class="input-group-text" id="inpsubtotal">{{
                  Subtotal
                }}</span>

                <span class="input-group-text" id="inputGroup-sizing-sm"
                  >Descuentos</span
                >
                <span class="input-group-text" id="inptotaldcto">{{
                  Descuentos
                }}</span>

                <span class="input-group-text" id="inputGroup-sizing-sm"
                  >Impuestos</span
                >
                <span class="input-group-text" id="inptotalimpuestos">{{
                  Impuestos
                }}</span>

                <span class="input-group-text" id="inputGroup-sizing-sm"
                  >Total</span
                >

                <span class="input-group-text" id="inptotaltotal">{{
                  Total
                }}</span>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <input type="checkbox" class="form-check-input" id="formInput57" />
            <label class="form-check-label" for="formInput57">Imprimir</label>
          </div>
          <div class="text-end">
            <button
              type="submit"
              class="
                btn btn-primary
                ps-4
                pe-4
                rounded-0 rounded-pill
                text-uppercase
              "
              @click="ActualizarDocumento()"
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
        </form>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "Venta",
  props: {
    msg: String,
  },
  data() {
    return {
      date: new Date(),
      option: {
        format: "DD/MM/YYYY",
        useCurrent: false,
      },
      items: [],
      bodegas: [],
      tipos: [],
    };
  },

  computed: {
    Subtotal() {
      return this.items.reduce((total, item) => {
        return parseFloat(total + item.cantidad * item.precio).toFixed(2);
      }, 0);
    },
    Descuentos() {
      return this.items.reduce((total, item) => {
        return parseFloat(
          total + item.cantidad * item.precio * (item.dcto / 100)
        ).toFixed(2);
      }, 0);
    },
    Impuestos() {
      return this.items.reduce((total, item) => {
        return parseFloat(
          total +
            item.cantidad *
              item.precio *
              (1 - item.dcto / 100) *
              (item.iva / 100)
        ).toFixed(2);
      }, 0);
    },
    Total() {
      return this.items.reduce((total, item) => {
        return parseFloat(
          total +
            item.cantidad *
              item.precio *
              (1 - item.dcto / 100) *
              (1 + item.iva / 100)
        ).toFixed(2);
      }, 0);
    },
  },

  methods: {
    AdicionarItem() {
      const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpdescripcion");
      const cantidad = document.getElementById("inpcantidad");
      const precio = document.getElementById("inpprecio");
      const dcto = document.getElementById("inpdcto");
      const iva = document.getElementById("inpiva");

      if (cantidad.value == "") {
        cantidad.value = 1;
      }
      if (precio.value == "") {
        precio.value = 0;
      }
      if (dcto.value == "") {
        dcto.value = 0;
      }

      const subtotal = cantidad.value *
              precio.value *
              (1 - dcto.value / 100) ;

      this.items.push({
        codigo: codigo.value,
        descripcion: descripcion.value,
        cantidad: cantidad.value,
        precio: precio.value,
        dcto: dcto.value,
        iva: iva.value,
        subtotal: subtotal,
      });
    },
    EliminarItem() {
      this.items.splice(this.items, 1);
    },

    async GetProducto() {
      const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpdescripcion");
      const precio = document.getElementById("inpprecio");
      const iva = document.getElementById("inpiva");
      //const inpcodigoconsulta = document.getElementById("inpBodConsulta");

      if (codigo.value) {
        try {
          //let filtro='614feaa8649ab9e8feed6cdc'
          let datos = await axios.get(
            `http://localhost:4000/api/Productos/${codigo.value}`
          );

          codigo.value = datos.data.codigo;
          descripcion.value = datos.data.descripcion;
          precio.value = datos.data.precio;
          iva.value = datos.data.ivaventas;
        } catch (error) {
          this.flashMessage.error({
            title: "Productos",
            message: "Producto No existe" || error,
          });
          console.log(error);
        }
      }
    },
    async GetCliente() {
      const cliente = document.getElementById("inpcliente");
      const nit = document.getElementById("inpnit");

      console.log(cliente.value);

      if (cliente.value) {
        try {
          //let filtro='614feaa8649ab9e8feed6cdc'
          let datos = await axios.get(
            `http://localhost:4000/api/Terceros_nombre/${cliente.value}`
          );
          console.log(datos);

          cliente.value = datos.data[0].nombre;
          nit.value = datos.data[0].nit;
        } catch (error) {
          this.flashMessage.error({
            title: "Cliente",
            message: "Cliente  No existe" || error,
          });
          console.log(error);
        }
      }
    },
    async GetBodegas() {
      try {
        //let filtro='614feaa8649ab9e8feed6cdc'
        let datos = await axios.get(`http://localhost:4000/api/Bodegas`);
        console.log(datos);
        this.bodegas = datos.data;
      } catch (error) {
        this.flashMessage.error({
          title: "Bodegas",
          message: "Bodegas No existe" || error,
        });
        console.log(error);
      }
    },
    async GetTipos() {
      try {
        //let filtro='614feaa8649ab9e8feed6cdc'
        let datos = await axios.get(
          `http://localhost:4000/api/Tipo_documentos`
        );
        console.log(datos);
        this.tipos = datos.data;
      } catch (error) {
        this.flashMessage.error({
          title: "Tipos",
          message: "Tipos No existe" || error,
        });
        console.log(error);
      }
    },
  async  ActualizarDocumento() {
      //const fecha ="" //document.getElementById("idfecha");
      const bodega = document.getElementById("selbodega");
      const documento = document.getElementById("seldocumento");
      const numero = document.getElementById("inpnumero");
      const nit = document.getElementById("inpnit");
      const condicion = document.getElementById("idforma");

      if (numero.value == "") {
        numero.value = 1;
      }
      const fecha = moment(String(this.date)).format("DD-MM-YYYY");
      //const ID=0;

      const Nuevodocumento = {
        idtipo: documento.value,
        idbodega: bodega.value,
        idtercero: nit.value,
        numero: numero.value,
        fecha: fecha,
        docproveedor: "",
        condicionpago: condicion.value,

        totalsub: this.Subtotal,
        totaldcto: this.Descuentos,
        totalimpuestos: this.Impuestos,
        total: this.Total,
      };
      console.log(Nuevodocumento);
    
      let keys = Object.keys(this.items);
      let i=0;
      let arr = [];

      
      try { 
          
          let datos = await axios.post(
          "http://localhost:4000/api/Documentos_Enca-nuevo",
          Nuevodocumento
        );
        let ID=0;
        ID = datos.data._id;
        console.log(ID)     
                     keys.forEach(key => {
                let item = this.items[key];
                    item;
                         arr.push({
                            codigo: this.items[i].codigo,
                            descripcion: this.items[i].descripcion,
                            cantidad: this.items[i].cantidad,
                            precio: this.items[i].precio,
                            dcto: this.items[i].dcto,
                            iva: this.items[i].iva,
                            subtotal: this.items[i].subtotal,
                            iddocenc : ID
                        });
                   
                    i++;       
                })
            console.log(arr);
        let datosdet = await axios.post(
          "http://localhost:4000/api/Documentos_Det-nuevo",
          arr
        );
                ID = datosdet.data._id;
                console.log(ID)  
           this.flashMessage.info({
          title: "Documento",
          message: "Documento almacenado con exito" ,
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Documento",
          message: "Error al actualizar documento" ,
        });
        console.log(error);
      }
    },
  },

    

  mounted() {
    this.GetBodegas(), this.GetTipos();
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
