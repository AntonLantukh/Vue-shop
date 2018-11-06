<template>
  <div class="container">
    <div class="row justify-content-around">
      <div class="col-3">
        <h3>Магазин</h3>
      </div>
      <navigation class="col-6"></navigation>
      <div class="col-3">
        <h3>Корзина</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import navigation from './Navigation';

  export default {
    name: 'Main-header',
    components: {
      navigation
    }
  }
</script>

<style scoped>
  .container {
    margin: 20px 0;
    vertical-align: center;
  }

  .row {
    align-items: baseline;
  }

  h3 {
    margin: 0;
  }

</style>
