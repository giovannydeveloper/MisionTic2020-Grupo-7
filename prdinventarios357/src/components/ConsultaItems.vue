const newLocal='ConsultItems'
<template>
    <div class="container">
            <form>
                    <div class="row">
                      <div class="mb-3 col-md-4">
                        <label class="form-label" for="iptnit">Código</label>
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
                          id="inpcodigoconsulta"
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
                          id="inpBodConsulta"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-12">
                        <label class="form-label text-primary" for="iptprecio"
                          >Stock por Bodega</label
                        >
                        <table class="table">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>bodega</th>
                              <th>Descripción</th>
                              <th>stock</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>1</th>
                              <td>10</td>
                              <td>Bodega principal</td>
                              <td>50</td>
                            </tr>
                            <tr>
                              <th>2</th>
                              <td>12</td>
                              <td>Bodega Medellín</td>
                              <td>100</td>
                            </tr>
                            <tr>
                              <th>3</th>
                              <td>13</td>
                              <td>Bodega Bogotá</td>
                              <td>100</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="mb-3 col-md-12">
                        <label class="form-label text-primary" for="iptprecio"
                          >Movimiento</label
                        >
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Tipo</th>
                              <th scope="col">Número</th>
                              <th scope="col">Bodega</th>
                              <th scope="col">Can. Entrada</th>
                              <th scope="col">Can. Salida</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Compras</td>
                              <td>2000</td>
                              <td>Bodega Principal</td>
                              <td>100</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>venta</td>
                              <td>2001</td>
                              <td>Bodega Principal</td>
                              <td>0</td>
                              <td>5</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Compras</td>
                              <td>2003</td>
                              <td>Bodega Medellín</td>
                              <td>50</td>
                              <td>0</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="col-md-12 mb-2">
                        <label
                          class="form-label text-primary"
                          for="iptdescuento"
                          >Pedidos Pendientes</label
                        >
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Tipo</th>
                              <th scope="col">Número</th>
                              <th scope="col">Bodega</th>
                              <th scope="col">Can. Pedida</th>
                              <th scope="col">Can. Despachada</th>
                              <th scope="col">Can. Pendiente</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Pedido Principal</td>
                              <td>300</td>
                              <td>Bodega Principal</td>
                              <td>1</td>
                              <td>0</td>
                              <td>1</td>
                            </tr>
                            <tr>
                              <th scope="row">1</th>
                              <td>Pedido Principal</td>
                              <td>301</td>
                              <td>Bodega Principal</td>
                              <td>200</td>
                              <td>50</td>
                              <td>150</td>
                            </tr>
                            <tr>
                              <th scope="row">1</th>
                              <td>Pedido Bogotá</td>
                              <td>300</td>
                              <td>Bodega Bogotá</td>
                              <td>120</td>
                              <td>100</td>
                              <td>20</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="text-end"></div>
                  </form>
    </div>
    
    
</template>
<script>

export default {
    name: "ConsultItems",
setup() {
        
    },
    }
</script>
<style scoped>

</style>
