<template>
  <div class="container">
    <section class="bg-light pb-0 pt-0">
      <div class="container pb-5 pt-0">
        <h2 class="text-center">FACTURA</h2>
        <form>
          <div class="row">
            <div class="mb-3 col-md-3">
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
                id="formInput4"
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
                id="iptfecha"
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
                        
                      <input type="text"
                      class="bg-light form-control ps-0 pe-0 rounded-0"
                       v-model="item.descripcion" />
                      
                    </td>
                    <td>
                      <input type="number" 
                      class="bg-light form-control ps-0 pe-0 rounded-0"
                      v-model="item.cantidad" />
                    </td>
                    <td>
                      <input type="number" 
                      class="bg-light form-control ps-0 pe-0 rounded-0"
                      v-model="item.precio" />
                    </td>
                    <td>
                      <input type="number" 
                      class="bg-light form-control ps-0 pe-0 rounded-0"
                      v-model="item.iva" />
                    </td>
                    <td>
                      <input type="number" 
                      class="bg-light form-control ps-0 pe-0 rounded-0"
                      v-model="item.subtotal" />
                    </td>
                    <td>
                      <button class="btn btn-primary btn-xs"
                      
                       @click="EliminarItem" >Borrar
                       </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
              <div class="row">
            <div class="col-md-2">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Subtotal</span
              >
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >{{total}}</span>
            </div>
            <div class="col-md-2">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Descuentos</span
              >
             <span class="input-group-text" id="inputGroup-sizing-sm"
                >{{total}}</span>
            </div>
            <div class="col-md-2">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Impuestos</span
              >
               <span class="input-group-text" id="inputGroup-sizing-sm"
                >{{total}}</span>
            </div>
            <div class="col-md-2">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Total</span
              >
                       
                <span class="input-group-text" id="inputGroup-sizing-sm"
                >{{total}}</span>
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
       totalsubtotal: 0,
        totaldescuentos: 0,
        totalimpuestos: 0,
        totaltotal: 0
    };
  },
  watch: {
    items: {
      handler(newValue) {
        newValue.forEach((item) => {
          item.subtotal = item.cantidad * item.precio;
        });
      },
      deep: true,
    },
  },

 computed: {
        total  () {
            return this.items.reduce((total,item)=>{
                return total + item.subtotal; 
            },0);
            
            
        },
      /*  descuentos: function () {
            var tt = 0;
            $.each(this.rows, function (i, e) {
                tt += accounting.unformat(e.tdescuentos, ",");
            });
            return tt;
        },
        Impuestos: function () {
            var tt = 0;
            $.each(this.rows, function (i, e) {
                tt += accounting.unformat(e.timpuestos, ",");
            });
            return tt;
        },
        total: function () {
            var tt = 0;
            $.each(this.rows, function (i, e) {
                tt += accounting.unformat(e.timpuestos, ",");
            });
            return tt;
        },
        */
        

    },

  methods: {
    AdicionarItem() {
      const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpdescripcion");
      const cantidad = document.getElementById("inpcantidad");
      const precio = document.getElementById("inpprecio");
      const dcto = document.getElementById("inpdcto");
      const iva = document.getElementById("inpiva");
      const subtotal = cantidad.value * precio.value * (dcto.value / 100);
      console.log(subtotal);

      this.items.push({
        codigo: codigo.value,
        descripcion: descripcion.value,
        cantidad: cantidad.value,
        precio: precio.value,
        dcto: dcto.value,
        iva: iva.value,
        subtotal: subtotal.value,
      });
      console.log(this.items);
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

      console.log(codigo.value);

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
