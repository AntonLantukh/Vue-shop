<template>
  <div class="wrapper">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-3">
          <img :src="pathLogo" alt="logo">
        </div>
        <navigation class="col-6"></navigation>
        <div class="col-3">
          <div class="row row__count">
            <img :src="pathCart" alt="cart">
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

    data() {
      return {
        pathLogo: './src/assets/logo.png',
        pathCart: './src/assets/cart.jpg'
      }
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
  }

  .container {
    margin: 0 auto 0 auto;
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

  img {
    width: 160px;
    height: 50px;
  }

  span {
    display: block;
    margin-left: 20px;
  }

</style>
