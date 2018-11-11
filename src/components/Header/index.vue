<template>
  <div class="header">
    <div class="container header__container">
      <div class="row justify-content-around">
        <div class="col-3">
          <img class="header__logo" :src="pathLogo" alt="logo">
        </div>
        <navigation class="col-6 header__navigation"></navigation>
        <div class="col-3">
          <div class="row header__count">
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
        pathCart: './src/assets/cart.png'
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
  .header {
    width: 100%;
    margin-bottom: 30px;
  }

  .header__container {
    margin: 0 auto 0 auto;
    vertical-align: center;
  }

  .header__navigation {
    padding-top: 10px;
  }

  .header__count {
    align-items: center;
  }

  h3 {
    margin: 0;
  }

  .header__logo {
    width: 190px;
    height: 60px;
  }

  span {
    display: block;
    margin-left: 20px;
  }

</style>
