const newLocal='Usuarios'
<template>
<!--<h3>Users:</h3>-->

    <h1>{{ msg }}</h1>

</template>
<script>
export default {
name: 'Usuarios',
  props: {
    msg: String
}
}
</script > 
<style scoped>

h3 {
  margin: 40px 0 0;
}

h1 {
  margin: 40px 0 0;
}
</style>