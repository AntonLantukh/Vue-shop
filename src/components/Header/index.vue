<template>
  <div class="wrapper">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-3">
          <h3>Phone shop</h3>
        </div>
        <navigation class="col-6"></navigation>
        <div class="col-3">
          <div class="row row__count">
            <h3>Cart</h3>
            <div>
              <span>Count: {{getTotalCount}} pcs.</span>
              <span>Total: {{getTotalSum}} USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navigation from '../Navigation';
  import { mapGetters } from 'vuex'

  export default {
    name: 'Main-header',
    components: {
      navigation
    },

    computed: {
      ...mapGetters([
        'getTotalCount', 'getTotalSum'
      ])
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

  .row__count {
    align-items: center;
  }

  h3 {
    margin: 0;
  }

  span {
    display: block;
    margin-left: 20px;
  }

</style>
