<template>
  <div class="mb-2 col-md-12">
    <div class="container">
      <div class="flex-column row text-center">
        <div>
          <b-card no-body>
            <b-tabs card vertical>
              <b-tab title="Datos Basicos" active>
                <div class="container" id="Basicos">
                  <form @submit.prevent="submit" id="form">
                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <label class="form-label" for="iptcodigo">ID</label>
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
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <label class="form-label" for="iptcodigo">Código</label>
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
                      <div class="row">
                        <div class="mb-3 col-md-12">
                          <button
                            type="submit"
                            class="
                              btn btn-primary
                              float-end
                              pe-4
                              ps-2
                              rounded-0 rounded-pill
                              text-uppercase
                            "
                            @click="GetProducto()"
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
                      <div class="mb-3 col-md-10">
                        <label class="form-label" for="iptdescripcion"
                          >Descripción</label
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
                          id="inpDescripcion"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-3">
                        <label class="form-label text-primary" for="iptprecio"
                          >Precio</label
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
                      <div class="mb-3 col-md-3">
                        <label class="form-label text-primary" for="iptprecio"
                          >Precio +iva</label
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
                          id="inpPrecioIVA"
                          placeholder=""
                        />
                      </div>
                      <div class="col-md-2 mb-2">
                        <label class="form-label" for="frmiva"
                          >Iva en Venta</label
                        >
                        <select
                          id="cboivaventa"
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
                          <option>0</option>
                          <option>5</option>
                          <option>19</option>
                        </select>
                      </div>
                      <div class="col-md-2 mb-2">
                        <label class="form-label" for="frmiva"
                          >Iva en compra</label
                        >
                        <select
                          id="cboivacompra"
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
                          <option>0</option>
                          <option>5</option>
                          <option>19</option>
                        </select>
                      </div>
                      <div class="col-md-3 mb-2">
                        <label class="form-label" for="frmiva"
                          >Maneja Inventarios</label
                        >
                        <select
                          id="cboinventario"
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
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                      <div class="col-md-3 mb-2">
                        <label class="form-label" for="frmiva"
                          >Lotes o Serial</label
                        >
                        <select
                          id="cbomanejalotes"
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
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="inputTextarea">Explicacion Adicional</label>
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
                        id="inputTextAdi"
                        placeholder=""
                      ></textarea>
                    </div>
                    <div class="text-end">
                       <div class="btn-toolbar" role="toolbar">
                      <div class="btn-group mr-2" role="group">
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
                      <div class="btn-group mr-2" role="group">
                      <button
                        type="submit"
                        class="
                          btn btn-primary
                          ps-4
                          pe-4
                          rounded-0 rounded-pill
                          text-uppercase
                        "
                        @click="DelProducto()"
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
                </div>
              </b-tab>
              <b-tab title="Proveedor">
                <div class="container" id="Proveedor">
                  <form>
                    <div class="row">
                      <div class="mb-3 col-md-4">
                        <label class="form-label" for="iptnit">Nit</label>
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
                          id="inpproveedor"
                          placeholder=""
                        />
                        <button
                          type="submit"
                          class="
                            btn btn-primary
                            float-end
                            pe-4
                            ps-4
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
                      <div class="mb-3 col-md-6">
                        <label class="form-label" for="iptnombre"
                          >bodegas</label
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
                          id="inpbodega"
                          placeholder=""
                        />
                        <select
                          id="cbomanejalotes"
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
                          <option>1-Lotes</option>
                          <option>2-Serial</option>
                          <option>3-Lotes Informativos</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-4">
                        <label class="form-label text-primary" for="iptprecio"
                          >costo última compra</label
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
                          id="iptcosto"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-3 col-md-4">
                        <label class="form-label text-primary" for="iptprecio"
                          >Costo Emergencia</label
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
                          id="iptcostoe"
                          placeholder=""
                        />
                      </div>
                      <div class="col-md-4 mb-2">
                        <label class="form-label" for="iptdescuento"
                          >Porcentaje último Descuento</label
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
                          id="iptdescuento"
                          placeholder=""
                        />
                      </div>
                      <div class="col-md-4 mb-2">
                        <label class="form-label" for="iptprecio"
                          >factor para producir precio</label
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
                          id="iptprecio"
                          placeholder=""
                        />
                      </div>
                      <div class="col-md-10 mb-2">
                        <label class="form-label" for="frmiva"
                          >Dias Reposición</label
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
                          id="iptdias"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-3 form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="inpNopedir"
                        />
                        <label class="form-check-label" for="formInput123"
                          >No pedir este producto al proveedor</label
                        >
                      </div>
                    </div>
                    <div class="text-end"></div>
                  </form>
                </div>
              </b-tab>
              <b-tab title="consulta">
                <div class="container" id="Consultas">
                  <consulta />
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import consulta from "./ConsultaItems.vue"

export default {
  name: "Productos",
  components :
  {
      consulta,
  },
  props: {
    msg: String,
  },

  methods: {
    async GetProducto() {
      const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpDescripcion");
      const ID = document.getElementById("inpID");

      const precio = document.getElementById("inpprecio");
      const cboivaventa = document.getElementById("cboivaventa");
      const cboivacompra = document.getElementById("cboivacompra");
      const cboinventario = document.getElementById("cboinventario");
      const cbomanejalotes = document.getElementById("cbomanejalotes");
      const inputTextAdi = document.getElementById("inputTextAdi");
      const inpproveedor = document.getElementById("inpproveedor");
      const inpbodega = document.getElementById("inpbodega");
      const iptcosto = document.getElementById("iptcosto");
      const iptcostoe = document.getElementById("iptcostoe");
      const iptdescuento = document.getElementById("iptdescuento");
      const iptprecio = document.getElementById("iptprecio");
      const iptdias = document.getElementById("iptdias");
      const inpNopedir = document.getElementById("inpNopedir");
      const inpPrecioIVA = document.getElementById("inpPrecioIVA");
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
          ID.value = datos.data._id;
          precio.value = datos.data.precio;
          inpPrecioIVA.value = datos.data.preciomasiva;
          cboivaventa.value = datos.data.ivaventas;
          cboivacompra.value = datos.data.ivacompras;
          cboinventario.value = datos.data.manejainv;
          cbomanejalotes.value = datos.data.loteserial;
          inputTextAdi.value = datos.data.notas;
          inpproveedor.value = datos.data.idproveedor;
          inpbodega.value = datos.data.idbodega;
          iptcosto.value = datos.data.costocompra;
          iptcostoe.value = datos.data.costoemergencia;
          iptdescuento.value = datos.data.porcentajedcto;
          iptprecio.value = datos.data.factor;
          iptdias.value = datos.data.dias;
          inpNopedir.value = datos.data.nopedir;
          console.log(datos.data.nopedir);
          if (datos.data.nopedir == true) {
            inpNopedir.checked = true;
          }

          this.flashMessage.info({
            title: "Productos",
            message: "Producto consultado con éxito",
          });
        } catch (error) {
          this.flashMessage.error({
            title: "Productos",
            message: "Producto No existe" || error,
          });
          console.log(error);
          descripcion.value = "";
          ID.value = "";
          precio.value = 0;
          inpPrecioIVA.value = 0;
          cboivaventa.value = 0;
          cboivacompra.value = 0;
          cboinventario.value = 0;
          cbomanejalotes.value = 0;
          inputTextAdi.value = "";
          inpproveedor.value = "";
          inpbodega.value = "";
          iptcosto.value = 0;
          iptcostoe.value = 0;
          iptdescuento.value = 0;
          iptprecio.value = 0;
          iptdias.value = 0;
          inpNopedir.checked = false;
        }
      }
    },
    async PostProducto() {
      const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpDescripcion");
      const ID = document.getElementById("inpID");

      const precio = document.getElementById("inpprecio");
      const cboivaventa = document.getElementById("cboivaventa");
      const cboivacompra = document.getElementById("cboivacompra");
      const cboinventario = document.getElementById("cboinventario");
      const cbomanejalotes = document.getElementById("cbomanejalotes");
      const inputTextAdi = document.getElementById("inputTextAdi");
      const inpproveedor = document.getElementById("inpproveedor");
      const inpbodega = document.getElementById("inpbodega");
      const iptcosto = document.getElementById("iptcosto");
      const iptcostoe = document.getElementById("iptcostoe");
      const iptdescuento = document.getElementById("iptdescuento");
      const iptprecio = document.getElementById("iptprecio");
      const iptdias = document.getElementById("iptdias");
      const inpNopedir = document.getElementById("inpNopedir");
      const inpPrecioIVA = document.getElementById("inpPrecioIVA");
      const Nopedir = false;
      if (inpNopedir.checked == true) {
        this.Nopedir = true;
      }

      const ActualizaProducto = {
        codigo: codigo.value,
        descripcion: descripcion.value,
        precio: precio.value,
        preciomasiva: inpPrecioIVA.value,
        ivaventas: cboivaventa.value,
        ivacompras: cboivacompra.value,
        manejainv: cboinventario.value,
        loteserial: cbomanejalotes.value,
        notas: inputTextAdi.value,
        idproveedor: inpproveedor.value,
        idbodegafija: inpbodega.value,
        costocompra: iptcosto.value,
        costoemergencia: iptcostoe.value,
        porcentajedcto: iptdescuento.value,
        factor: iptprecio.value,
        dias: iptdias.value,
        nopedir: Nopedir,
      };
      console.log(ActualizaProducto);
      try {
        let datos = await axios.post(
          "http://localhost:4000/api/Productos-nuevo",
          ActualizaProducto
        );
        ID.value = datos.data._id;
        console.log(datos);
        //desadi.value="Nuevo Usuario creado" + datos.data.Idusuario;
        this.flashMessage.info({
          title: "Creación Producto",
          message: "Producto creado con éxito",
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Creación Producto",
          message: "Error en Creación" || error,
        });
        console.log(error);
      }
    },
    async DelProducto() {
      const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpDescripcion");
      const ID = document.getElementById("inpID");

      const precio = document.getElementById("inpprecio");
      const cboivaventa = document.getElementById("cboivaventa");
      const cboivacompra = document.getElementById("cboivacompra");
      const cboinventario = document.getElementById("cboinventario");
      const cbomanejalotes = document.getElementById("cbomanejalotes");
      const inputTextAdi = document.getElementById("inputTextAdi");
      const inpproveedor = document.getElementById("inpproveedor");
      const inpbodega = document.getElementById("inpbodega");
      const iptcosto = document.getElementById("iptcosto");
      const iptcostoe = document.getElementById("iptcostoe");
      const iptdescuento = document.getElementById("iptdescuento");
      const iptprecio = document.getElementById("iptprecio");
      const iptdias = document.getElementById("iptdias");
      const inpNopedir = document.getElementById("inpNopedir");
      const inpPrecioIVA = document.getElementById("inpPrecioIVA");
      const filtro = document.getElementById("inpID").value;

      // const desadi = document.getElementById("inpDesadi");

      console.log(filtro);
      try {
        let datos = await axios.delete(
          `http://localhost:4000/api/Productos/${filtro}`
        );
        this.flashMessage.info({
          title: "Borrado Productos",
          message: "Productos Borrado con éxito",
        });
        codigo.value = "";
        descripcion.value = "";
        ID.value = "";
        precio.value = 0;
        inpPrecioIVA.value = 0;
        cboivaventa.value = 0;
        cboivacompra.value = 0;
        cboinventario.value = 0;
        cbomanejalotes.value = 0;
        inputTextAdi.value = "";
        inpproveedor.value = "";
        inpbodega.value = "";
        iptcosto.value = 0;
        iptcostoe.value = 0;
        iptdescuento.value = 0;
        iptprecio.value = 0;
        iptdias.value = 0;
        inpNopedir.checked = false;
        console.log(datos);
      } catch (error) {
        this.flashMessage.error({
          title: "Borrado de Producto",
          message: "Error en Borrado" || error,
        });
        console.log(error);
      }
    },
    async PutProducto() {
      const codigo = document.getElementById("inpcodigo");
      const descripcion = document.getElementById("inpDescripcion");
      const ID = document.getElementById("inpID");

      const precio = document.getElementById("inpprecio");
      const cboivaventa = document.getElementById("cboivaventa");
      const cboivacompra = document.getElementById("cboivacompra");
      const cboinventario = document.getElementById("cboinventario");
      const cbomanejalotes = document.getElementById("cbomanejalotes");
      const inputTextAdi = document.getElementById("inputTextAdi");
      const inpproveedor = document.getElementById("inpproveedor");
      const inpbodega = document.getElementById("inpbodega");
      const iptcosto = document.getElementById("iptcosto");
      const iptcostoe = document.getElementById("iptcostoe");
      const iptdescuento = document.getElementById("iptdescuento");
      const iptprecio = document.getElementById("iptprecio");
      const iptdias = document.getElementById("iptdias");
      const inpNopedir = document.getElementById("inpNopedir");
      const inpPrecioIVA = document.getElementById("inpPrecioIVA");
      if (inpNopedir.checked == true) {
        inpNopedir.value = "true";
      }

      const ActualizaProducto = {
        id: ID.value,
        codigo: codigo.value,
        descripcion: descripcion.value,
        precio: precio.value,
        preciomasiva: inpPrecioIVA.value,
        ivaventas: cboivaventa.value,
        ivacompras: cboivacompra.value,
        manejainv: cboinventario.value,
        loteserial: cbomanejalotes.value,
        notas: inputTextAdi.value,
        idproveedor: inpproveedor.value,
        idbodegafija: inpbodega.value,
        costocompra: iptcosto.value,
        costoemergencia: iptcostoe.value,
        porcentajedcto: iptdescuento.value,
        factor: iptprecio.value,
        dias: iptdias.value,
        nopedir: inpNopedir.value,
      };
      console.log(ActualizaProducto);
      try {
        let datos = await axios.put(
          "http://localhost:4000/api/Producto-actualizar",
          ActualizaProducto
        );
        ID.value = datos.data._id;
        console.log(datos);

        this.flashMessage.info({
          title: "Actualización Producto",
          message: "Producto Creada con éxito",
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Actualización Producto",
          message: "Error en Creación" || error,
        });
        console.log(error);
      }
    },
    CrearActualizar() {
      const ID = document.getElementById("inpID");
      console.log(ID.value);
      if (ID.value == "") {
        this.PostProducto();
      } else {
        this.PutProducto();
      }
    },
  },
};
</script > 
<style scoped>
</style> 