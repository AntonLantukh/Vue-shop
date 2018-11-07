<template>
  <div class="container">
    <div class="row justify-content-between">
      <products></products>
    </div>
  </div>
</template>

<script>
  import products from '../Products/';

  export default {
    name: 'Main-body',
    components: {
      products
    }
  }
</script>

<style scoped>

</style>
