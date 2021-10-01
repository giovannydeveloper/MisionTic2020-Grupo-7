<template>
  <div class="container">
    <div class="flex-column row text-center">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">SIG735</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler42"
            aria-controls=""
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarToggler42">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Usuarios</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="#">Categorias</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="#">Productos</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="#">Compras</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Ventas</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="#">Carrito</a>
              </li>
            </ul>

            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Buscar.."
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
      <h1 class="text-center">Productos</h1>
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            href="#"
            data-bs-toggle="tab"
            role="tab"
            aria-controls=""
            aria-expanded="true"
            @click="seleccionar(event, 'Basicos')"
            >Datos Basicos</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            data-bs-toggle="tab"
            role="tab"
            aria-controls=""
            aria-expanded="true"
            @click="seleccionar(event, 'Proveedor')"
            >Proveedor</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            data-bs-toggle="tab"
            role="tab"
            aria-controls=""
            aria-expanded="true"
            @click="seleccionar(event, 'Consultas')"
            >consulta</a
          >
        </li>
      </ul>
    </div>
    <!--    <section class="bg-light pb-5 pt-5"> -->
    <div class="container" id="Basicos">
      <form>
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
              id="inputFirstName"
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
          <div class="mb-3 col-md-10">
            <label class="form-label" for="iptdescripcion">Descripción</label>
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
              id="inputLastName"
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
              id="inputEmail"
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
              id="inputEmail"
              placeholder=""
            />
          </div>
          <div class="col-md-2 mb-2">
            <label class="form-label" for="frmiva">Iva en Venta</label>
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
              <option>0</option>
            </select>
          </div>
          <div class="col-md-2 mb-2">
            <label class="form-label" for="frmiva">Iva en compra</label>
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
              <option>0</option>
            </select>
          </div>
          <div class="col-md-3 mb-2">
            <label class="form-label" for="frmiva">Maneja Inventarios</label>
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
              <option>1-Controla Stock</option>
              <option>2-Servicio</option>
              <option>3-Permite inventarios negativo</option>
            </select>
          </div>
          <div class="col-md-3 mb-2">
            <label class="form-label" for="frmiva">Lotes o Serial</label>
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
            id="inputTextarea"
            placeholder=""
          ></textarea>
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
      </form>
    </div>
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
              id="inputFirstName"
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
            <label class="form-label" for="iptnombre">bodegas</label>
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
              id="iptnombre"
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
            <label class="form-label" for="frmiva">Dias Reposición</label>
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
            <input type="checkbox" class="form-check-input" id="formInput123" />
            <label class="form-check-label" for="formInput123"
              >No pedir este producto al proveedor</label
            >
          </div>
        </div>
        <div class="text-end"></div>
      </form>
    </div>
    <div class="container" id="Consultas">
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
              id="inputFirstName"
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
            <label class="form-label" for="iptnombre">bodegas</label>
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
              id="iptnombre"
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
            <label class="form-label text-primary" for="iptdescuento"
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
  </div>
</template>
<script>
export default {
  name: "Menuppal",
  props: {
    msg: String,
  },
};

(function seleccionar(evt, pestana) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("container");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(pestana).style.display = "block";
  evt.currentTarget.className += " active";
}());


</script > 
<style scoped>

</style> 