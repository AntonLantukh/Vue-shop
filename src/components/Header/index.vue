<template>
  <div class="wrapper">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-3">
          <h3>Phone shop</h3>
        </div>
        <navigation class="col-6"></navigation>
        <div class="col-3">
          <h3>Cart</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navigation from '../Navigation';

  export default {
    name: 'Main-header',
    components: {
      navigation
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    margin-bottom: 30px;
    background-color: aliceblue;
  }

  .container {
    margin: 0 auto 0 auto;
    padding: 10px;
    vertical-align: center;
  }

  .row {
    align-items: baseline;
  }

  h3 {
    margin: 0;
  }

</style>
