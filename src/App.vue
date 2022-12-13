<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <ApiRestFul/>

    </div>
  </div>
</template>

<script>

import ApiRestFul from './componentes/ApiRestFul.vue'


export default {
  name: 'App',
  components: {

    ApiRestFul
  }
}
</script>

<style>
  h1 {
    color: blue;
  }
</style>
