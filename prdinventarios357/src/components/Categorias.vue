const newLocal='Categorias'
<template>
  <div>
    <div class="flex-column row text-center">
      <h1 class="text-center">CATEGORIAS</h1>
    </div>
    <div class="bg-secondary container float-none"></div>
    <div class="bg-primary container"></div>
    <div class="bg-primary container"></div>
    <section class="bg-light pb-5 pt-5">
      <div class="container pb-5 pt-5">
        <div class="bg-white p-4 p-lg-5">
          <form>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="iptcodigo">Código</label>
                <input
                  type="text"
                  class="form-control rounded-0"
                  id="inputName"
                  placeholder=""
                />
              </div>
              <div class="form-group col-md-6"></div>
            </div>
            <div class="form-group">
              <label for="iptDescripción">Descripción</label>
              <input
                type="text"
                class="form-control rounded-0"
                id="inputSubject"
                placeholder=""
              />
            </div>
            <div class="form-group">
              <button
                type="submit"
                class="
                  btn btn-primary
                  pl-4
                  pr-4
                  rounded-0 rounded-pill
                  text-uppercase
                "
              >
                <span class="align-middle">Nuevo</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="16"
                  width="16"
                  class="ml-1"
                >
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </button>
              <button
                type="submit"
                class="
                  btn btn-primary
                  pl-4
                  pr-4
                  rounded-0 rounded-pill
                  text-uppercase
                "
              >
                <span class="align-middle">Borrar</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="16"
                  width="16"
                  class="ml-1"
                >
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </button>
              <button
                type="submit"
                class="
                  btn btn-primary
                  float-right
                  pl-4
                  pr-4
                  rounded-0 rounded-pill
                  text-uppercase
                "
              >
                <span class="align-middle">Agregar</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="16"
                  width="16"
                  class="ml-1"
                >
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </button>
              <table class="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Código</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>001</td>
                    <td>Alimentos</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>002</td>
                    <td>Bebidas</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>003</td>
                    <td>Medicamentos</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-right">
              <button
                type="submit"
                class="
                  btn btn-primary
                  pl-4
                  pr-4
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
                  class="ml-1"
                >
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Categorias",
  props: {
    msg: String,
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